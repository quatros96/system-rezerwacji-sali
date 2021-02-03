import { Injectable } from '@angular/core'
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from '@angular/fire/firestore'
import { Usterka } from 'app/models/usterka'
import { Observable, of, pipe } from 'rxjs'
import { concatMap, map, mergeMap } from 'rxjs/operators'
import { Sala } from '../../models/sala'

interface rezerwacjaUzytkownika {
    wydzial: string
    numer: number
    data: string
    godzinaOd: number
    godzinaDo: number
    sala: Sala
}

export interface testRezerwacja {
    dzien: string
    poczatek: number
    koniec: number
    uzytkownik: number
    sala_nr: string
    wydzial: string
    sala: string
    id?: string
}

@Injectable({
    providedIn: 'root',
})
export class DataBaseService {
    constructor(private afs: AngularFirestore) {}

    public getUserReseravtions(userid: number): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) =>
            ref.where('uzytkownik', '==', userid)
        )
        return rezerwacje.valueChanges({ idField: 'id' })
    }

    public getReservationsBySalaIDzien(
        salaid: string,
        dzien: string
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) =>
            ref.where('dzien', '==', dzien).where('sala', '==', salaid)
        )
        return rezerwacje.valueChanges({ idField: 'id' })
    }

    public updateReservation(
        idRezerwacji: string,
        godzinaOd: number,
        godzinaDo: number
    ) {
        this.afs
            .doc(`rezerwacje/${idRezerwacji}`)
            .update({ poczatek: godzinaOd, koniec: godzinaDo })
    }

    public deleteReservation(idRezerwacji: string): void {
        this.afs.doc(`rezerwacje/${idRezerwacji}`).delete()
    }

    public reportIssue(sala: Sala, usterka: Usterka): void {
        this.afs.collection(`sale/${sala.iddoc}/usterki`).add(usterka)
    }

    public addIssueToRoom(salaId: string, item: string): void {
        if (item === 'klima') {
            this.afs.doc(`sale/${salaId}`).update({ 'eq.klima': false })
        } else if (item === 'tablica') {
            this.afs.doc(`sale/${salaId}`).update({ 'eq.tablica': false })
        } else if (item === 'rzutnik') {
            this.afs.doc(`sale/${salaId}`).update({ 'eq.rzutnik': false })
        } else {
            this.afs.doc(`sale/${salaId}`).update({ 'eq.komputer': false })
        }
        console.log('Added issue')
    }

    public addReservation(
        sala: Sala,
        user: number,
        dzien: string,
        odH: number,
        doH: number
    ) {
        let rezerwacja: testRezerwacja = {
            dzien: dzien,
            poczatek: odH,
            koniec: doH,
            sala: sala.id,
            sala_nr: sala.numer,
            uzytkownik: user,
            wydzial: sala.wydzial,
        }
        const rezerwacje = this.afs.collection('rezerwacje')
        rezerwacje.add(rezerwacja)
    }

    public searchForRoom(
        wydzial: string,
        typSali: string,
        pojemnosc: number,
        numerSali: string,
        rzutnik: boolean,
        tablica: boolean,
        komputer: boolean,
        klima: boolean
    ): Observable<any> {
        let sale = this.afs
            .collection('sale', (ref) => {
                let query: any = ref
                if (wydzial) {
                    query = query.where('wydzial', '==', wydzial)
                    console.log('szukanie po wydziale pole wydzial ==', wydzial)
                }
                if (typSali) {
                    query = query.where('typ', '==', typSali)
                }
                if (pojemnosc) {
                    query = query.where('pojemnosc', '>=', pojemnosc)
                }
                if (numerSali) {
                    query = query.where('numer', '==', numerSali)
                }
                if (rzutnik) {
                    query = query.where('eq.rzutnik', '==', true)
                }
                if (tablica) {
                    query = query.where('eq.tablica', '==', true)
                }
                if (komputer) {
                    query = query.where('eq.komputer', '==', true)
                }
                if (klima) {
                    query = query.where('eq.klima', '==', true)
                }
                return query
            })
            .valueChanges({ idField: 'iddoc' })
        return sale
    }

    public filterReservationsByDayAndTime(
        data: string,
        odH: number,
        doH: number
    ): Observable<string[]> {
        let pierwszyWarunek1: Array<testRezerwacja> = []
        let pierwszyWarunek2: Array<testRezerwacja> = []
        let drugiWarunek1: Array<testRezerwacja> = []
        let drugiWarunek2: Array<testRezerwacja> = []
        let trzeciWarunek1: Array<testRezerwacja> = []
        let trzeciWarunek2: Array<testRezerwacja> = []
        let czwartyWarunek1: Array<testRezerwacja> = []
        let czwartyWarunek2: Array<testRezerwacja> = []

        return this.filterByAvailabilityNKIP(data, odH, doH)
            .pipe(
                concatMap((data1) => {
                    pierwszyWarunek1 = data1
                    console.log('1')
                    return this.filterByAvailabilityNKIK(data, odH, doH)
                }),
                concatMap((data2) => {
                    pierwszyWarunek2 = data2
                    console.log('2')
                    return this.filterByAvailabilityNPIP(data, odH, doH)
                }),
                concatMap((data3) => {
                    drugiWarunek1 = data3
                    console.log('3')
                    return this.filterByAvailabilityNKIK2(data, odH, doH)
                }),
                concatMap((data4) => {
                    drugiWarunek2 = data4
                    console.log('4')
                    return this.filterByAvailabilityNPIP2(data, odH, doH)
                }),
                concatMap((data5) => {
                    trzeciWarunek1 = data5
                    console.log('5')
                    return this.filterByAvailabilityNPIK(data, odH, doH)
                }),
                concatMap((data6) => {
                    trzeciWarunek2 = data6
                    console.log('6')
                    return this.filterByAvailabilityNPIP3(data, odH, doH)
                }),
                concatMap((data7) => {
                    czwartyWarunek1 = data7
                    console.log('7')
                    return this.filterByAvailabilityNKIK3(data, odH, doH)
                })
            )
            .pipe(
                map((data8) => {
                    czwartyWarunek2 = data8
                    let wynik = this.computeContitions(
                        pierwszyWarunek1,
                        pierwszyWarunek2,
                        drugiWarunek1,
                        drugiWarunek2,
                        trzeciWarunek1,
                        trzeciWarunek2,
                        czwartyWarunek1,
                        czwartyWarunek2
                    )
                    console.log(wynik)
                    let partWynik = wynik.map((element) => element.sala)
                    return [...new Set(partWynik)]
                })
            )
    }

    private computeContitions(
        pier1: Array<any>,
        pier2: Array<any>,
        drug1: Array<any>,
        drug2: Array<any>,
        trz1: Array<any>,
        trz2: Array<any>,
        czt1: Array<any>,
        czt2: Array<any>
    ): Array<testRezerwacja> {
        let wynik1: Array<testRezerwacja> = []
        let wynik2: Array<testRezerwacja> = []
        let wynik3: Array<testRezerwacja> = []
        let wynik4: Array<testRezerwacja> = []
        for (let rezerwacja1 of pier1) {
            for (let rezerwacja2 of pier2) {
                if (this.haveSameData(rezerwacja1, rezerwacja2)) {
                    if (!wynik1.includes(rezerwacja1)) {
                        wynik1.push(rezerwacja1)
                    }
                }
            }
        }
        for (let rezerwacja1 of drug1) {
            for (let rezerwacja2 of drug2) {
                if (this.haveSameData(rezerwacja1, rezerwacja2)) {
                    if (!wynik2.includes(rezerwacja1)) {
                        wynik2.push(rezerwacja1)
                    }
                }
            }
        }
        for (let rezerwacja1 of trz1) {
            for (let rezerwacja2 of trz2) {
                if (this.haveSameData(rezerwacja1, rezerwacja2)) {
                    if (!wynik3.includes(rezerwacja1)) {
                        wynik3.push(rezerwacja1)
                    }
                }
            }
        }
        for (let rezerwacja1 of czt1) {
            for (let rezerwacja2 of czt2) {
                if (this.haveSameData(rezerwacja1, rezerwacja2)) {
                    if (!wynik4.includes(rezerwacja1)) {
                        wynik4.push(rezerwacja1)
                    }
                }
            }
        }
        console.log(wynik1)
        console.log(wynik2)
        console.log(wynik3)
        console.log(wynik4)
        let wynikPosredni: Array<testRezerwacja> = [
            ...wynik1,
            ...wynik2,
            ...wynik3,
            ...wynik4,
        ]
        console.log(wynikPosredni)
        let wynik = wynikPosredni.filter(
            (thing, index, self) =>
                index ===
                self.findIndex(
                    (t) =>
                        t.sala === thing.sala &&
                        t.uzytkownik === thing.uzytkownik &&
                        t.poczatek === thing.poczatek &&
                        t.koniec === thing.koniec
                )
        )
        console.log(wynik)
        return wynik
    }

    //pierwszy warunek
    private filterByAvailabilityNKIP(
        data: string,
        odH: number,
        doH: number
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) => {
            return ref.where('dzien', '==', data).where('poczatek', '<', doH)
        })
        return rezerwacje.valueChanges()
    }
    private filterByAvailabilityNKIK(
        data: string,
        odH: number,
        doH: number
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) => {
            return ref.where('dzien', '==', data).where('koniec', '>=', doH)
        })
        return rezerwacje.valueChanges()
    }

    //drugi warunek
    private filterByAvailabilityNPIP(
        data: string,
        odH: number,
        doH: number
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) => {
            return ref.where('dzien', '==', data).where('poczatek', '<=', odH)
        })
        return rezerwacje.valueChanges()
    }
    private filterByAvailabilityNKIK2(
        data: string,
        odH: number,
        doH: number
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) => {
            return ref.where('dzien', '==', data).where('koniec', '>=', doH)
        })
        return rezerwacje.valueChanges()
    }

    //trzeci warunek
    private filterByAvailabilityNPIP2(
        data: string,
        odH: number,
        doH: number
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) => {
            return ref.where('dzien', '==', data).where('poczatek', '<=', odH)
        })
        return rezerwacje.valueChanges()
    }
    private filterByAvailabilityNPIK(
        data: string,
        odH: number,
        doH: number
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) => {
            return ref.where('dzien', '==', data).where('koniec', '>', odH)
        })
        return rezerwacje.valueChanges()
    }

    //czwarty warunek
    private filterByAvailabilityNPIP3(
        data: string,
        odH: number,
        doH: number
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) => {
            return ref.where('dzien', '==', data).where('poczatek', '>', odH)
        })
        return rezerwacje.valueChanges()
    }
    private filterByAvailabilityNKIK3(
        data: string,
        odH: number,
        doH: number
    ): Observable<any> {
        let rezerwacje = this.afs.collection('rezerwacje', (ref) => {
            return ref.where('dzien', '==', data).where('koniec', '<', doH)
        })
        return rezerwacje.valueChanges()
    }

    private haveSameData = function (obj1: any, obj2: any) {
        const obj1Length = Object.keys(obj1).length
        const obj2Length = Object.keys(obj2).length

        if (obj1Length === obj2Length) {
            return Object.keys(obj1).every(
                (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
            )
        }
        return false
    }
}
