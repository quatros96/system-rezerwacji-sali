import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable, pipe } from 'rxjs'
import { map, filter, tap } from 'rxjs/operators'

interface Equipment {
    klima: boolean
    komp: boolean
    rzutnik: boolean
    tab: boolean
    [key: string]: boolean
}

interface Godzina {
    godzinaOd: number
    godzinaDo: number
    rezerwacjaUserID: number
}

interface Rezerwacja {
    date: string
    godziny: Array<Godzina>
}

interface Sala {
    numer: number
    opiekunid: number
    poj: number
    przynaleznosc: string
    typ: string
    eq: Equipment
    rezerwacje: Array<Rezerwacja>
}

@Injectable({
    providedIn: 'root',
})
export class DataBaseService {
    constructor(private firedb: AngularFireDatabase) {}

    public getDane(): Observable<any> {
        return this.firedb.object('sale').valueChanges()
    }
    public getUserReservations(userid: number = 123456): Observable<any> {
        return this.firedb
            .object('sale')
            .valueChanges()
            .pipe(
                map((dane: any) => {
                    let wyniki: any[] = []
                    for (let sala of dane) {
                        for (let rezerwacja of sala.rezerwacje) {
                            for (let godzina of rezerwacja.godziny) {
                                if (godzina.rezerwacjaUserID === userid) {
                                    if (!wyniki.includes(sala)) {
                                        wyniki.push(sala)
                                    }
                                }
                            }
                        }
                    }
                    return wyniki
                })
            )
    }
    public getFilteredRooms(
        wydzial: string,
        typSali: string,
        pojemnosc: Array<number>,
        numerSali: number,
        dzien: Date,
        godziny: Array<number>,
        equipment: Array<string>
    ): Observable<any> {
        return this.firedb
            .object('sale')
            .valueChanges()
            .pipe(
                map((dane: any) => {
                    let wyniki: any[] = []
                    for (let sala of dane) {
                        for (let rezerwacja of sala.rezerwacje) {
                            for (let godzina of rezerwacja) {
                                if (true) {
                                    if (!wyniki.includes(sala)) {
                                        wyniki.push(sala)
                                    }
                                }
                            }
                        }
                    }
                    return wyniki
                })
            )
    }

    private filterWydzial(sale: Array<Sala>, wydzial: string): Array<Sala> {
        let wyniki: Array<Sala> = []
        for (let sala of sale) {
            if (sala.przynaleznosc === wydzial) {
                if (!wyniki.includes(sala)) {
                    wyniki.push(sala)
                }
            }
        }
        return wyniki
    }

    private filterTypSali(sale: Array<Sala>, typ: string): Array<Sala> {
        let wyniki: Array<Sala> = []
        for (let sala of sale) {
            if (sala.typ === typ) {
                if (!wyniki.includes(sala)) {
                    wyniki.push(sala)
                }
            }
        }
        return wyniki
    }

    private filterPojemnosc(
        sale: Array<Sala>,
        odpoj: number,
        dopoj: number
    ): Array<Sala> {
        let wyniki: Array<Sala> = []
        for (let sala of sale) {
            if (sala.poj >= odpoj && sala.poj <= dopoj) {
                if (!wyniki.includes(sala)) {
                    wyniki.push(sala)
                }
            }
        }
        return wyniki
    }

    private filterNumerSali(sale: Array<Sala>, numerSali: number): Array<Sala> {
        let wyniki: Array<Sala> = []
        for (let sala of sale) {
            if (sala.numer === numerSali) {
                if (!wyniki.includes(sala)) {
                    wyniki.push(sala)
                }
            }
        }
        return wyniki
    }

    private filterDostepnosc(
        sale: Array<Sala>,
        data: string,
        odGodzina: number,
        doGodzina: number
    ): Array<Sala> {
        let wyniki: Array<Sala> = []
        for (let sala of sale) {
            let dateMach: boolean = false
            for (let rezerwacja of sala.rezerwacje) {
                if (rezerwacja.date === data) {
                    dateMach = true
                }
            }
            if (!dateMach) {
                if (!wyniki.includes(sala)) {
                    wyniki.push(sala)
                }
                continue
            }
            let tempRezerwacja = sala.rezerwacje.find((element) => {
                element.date === data
            })
            let hourMach: boolean = false
            for (let index = odGodzina - 7; index < doGodzina - 8; index++) {
                if (tempRezerwacja?.godziny[index].rezerwacjaUserID !== 0) {
                    hourMach = true
                    break
                }
            }
            if (!hourMach) {
                if (!wyniki.includes(sala)) {
                    wyniki.push(sala)
                }
            }
        }
        return wyniki
    }

    private filterWyposazenie(
        sale: Array<Sala>,
        wyposazenie: Array<string>
    ): Array<Sala> {
        let wyniki: Array<Sala> = []
        for (let sala of sale) {
            let isValid: boolean = true
            for (let item in sala.eq) {
                if (!wyposazenie.includes(item) || !sala.eq[item]) {
                    isValid = false
                    break
                }
            }
            if (isValid) {
                if (!wyniki.includes(sala)) {
                    wyniki.push(sala)
                }
            }
        }
        return wyniki
    }
}
