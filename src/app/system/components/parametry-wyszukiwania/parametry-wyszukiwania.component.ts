import { Component, OnInit } from '@angular/core'
import { Sala } from 'app/models/sala'
import {
    DataBaseService,
    testRezerwacja,
} from '../../../core/services/data-base.service'
import { FormBuilder } from '@angular/forms'
import { DataStoreService } from '../../../core/services/data-store.service'
import { Subscription } from 'rxjs'

interface wydzialy {
    value: string
    viewValue: string
}

interface typ {
    value: string
    viewValue: string
}

interface liczby {
    value: number
    viewValue: number
}

@Component({
    selector: 'srs-parametry-wyszukiwania',
    templateUrl: './parametry-wyszukiwania.component.html',
    styleUrls: ['./parametry-wyszukiwania.component.less'],
    providers: [],
})
export class ParametryWyszukiwaniaComponent implements OnInit {
    wydzialyy: wydzialy[] = [
        { value: 'Mechatroniki', viewValue: 'Mechatroniki' },
        {
            value: 'Geodezji',
            viewValue: 'Geodezji',
        },
    ]

    typy: typ[] = [
        { value: 'Wykładowa', viewValue: 'Wykładowa' },
        { value: 'Laboratorium', viewValue: 'Laboratorium' },
        { value: 'Dydaktyczna', viewValue: 'Dydaktyczna' },
    ]

    zbior: liczby[] = [
        { value: 8, viewValue: 8 },
        { value: 9, viewValue: 9 },
        { value: 10, viewValue: 10 },
        { value: 11, viewValue: 11 },
        { value: 12, viewValue: 12 },
        { value: 13, viewValue: 13 },
        { value: 14, viewValue: 14 },
        { value: 15, viewValue: 15 },
        { value: 16, viewValue: 16 },
        { value: 17, viewValue: 17 },
        { value: 18, viewValue: 18 },
        { value: 19, viewValue: 19 },
        { value: 20, viewValue: 20 },
    ]
    constructor(
        private dataBase: DataBaseService,
        private fb: FormBuilder,
        private dataStore: DataStoreService
    ) {}

    public wynikiTabela: Array<Sala> = []

    public wyszukiwanieForm = this.fb.group({
        wydzial: [''],
        typSali: [''],
        pojemnosc: [],
        numerSali: [''],
        data: [''],
        godzinaOd: [],
        godzinaDo: [],
        rzutnik: [false],
        klimatyzacja: [false],
        komputer: [false],
        tablica: [false],
    })

    get wydzial() {
        return this.wyszukiwanieForm.get('wydzial')
    }
    get typSali() {
        return this.wyszukiwanieForm.get('typSali')
    }
    get pojemnosc() {
        return this.wyszukiwanieForm.get('pojemnosc')
    }
    get numerSali() {
        return this.wyszukiwanieForm.get('numerSali')
    }
    get data() {
        return this.wyszukiwanieForm.get('data')
    }
    get godzinaOd() {
        return this.wyszukiwanieForm.get('godzinaOd')
    }
    get godzinaDo() {
        return this.wyszukiwanieForm.get('godzinaDo')
    }
    get rzutnik() {
        return this.wyszukiwanieForm.get('rzutnik')
    }
    get klimatyzacja() {
        return this.wyszukiwanieForm.get('klimatyzacja')
    }
    get komputer() {
        return this.wyszukiwanieForm.get('komputer')
    }
    get tablica() {
        return this.wyszukiwanieForm.get('tablica')
    }

    ngOnInit(): void {}

    public wyszukajSale(): void {
        console.log(this.wydzial?.value)
        console.log(this.typSali?.value)
        console.log(this.pojemnosc?.value)
        console.log(this.numerSali?.value)
        console.log(this.data?.value)
        console.log(this.godzinaOd?.value)
        console.log(this.godzinaDo?.value)
        console.log(this.rzutnik?.value)
        console.log(this.klimatyzacja?.value)
        console.log(this.komputer?.value)
        console.log(this.tablica?.value)
        this.dataBase
            .searchForRoom(
                this.wydzial?.value,
                this.typSali?.value,
                this.pojemnosc?.value,
                this.numerSali?.value
            )
            .subscribe((data) => {
                if (
                    this.data?.value &&
                    this.godzinaOd?.value &&
                    this.godzinaDo?.value
                ) {
                    console.log('uwzgledniono daty')
                    let dataRezerwacji = new Date(
                        this.data?.value
                    ).toLocaleDateString('en-GB')
                    this.dataBase
                        .filterReservationsByDayAndTime(
                            String(dataRezerwacji),
                            Number(this.godzinaOd.value),
                            Number(this.godzinaDo.value)
                        )
                        .subscribe((bannedIDs) => {
                            console.log('bannedID', bannedIDs)
                            this.wynikiTabela = this.getAvailableRooms(
                                data,
                                bannedIDs
                            )
                            console.log('wyniki do tabeli', this.wynikiTabela)
                            this.dataStore.changeMessage(this.wynikiTabela)
                        })
                } else {
                    console.log('bez daty')
                    this.wynikiTabela = data
                    this.dataStore.changeMessage(this.wynikiTabela)
                }
            })
    }

    public getAvailableRooms(
        sale: Array<Sala>,
        bannedIDs: Array<string>
    ): Array<Sala> {
        let wynik: Array<Sala> = []
        console.log(sale)
        for (const banned of bannedIDs) {
            if (wynik.length !== 0) {
                wynik = wynik.filter((sala) => sala.id != banned)
                console.log(wynik)
            } else {
                wynik = sale.filter((sala) => sala.id != banned)
                console.log(wynik)
            }
        }
        if (bannedIDs.length === 0) {
            wynik = sale
        }
        return wynik
    }
}
