import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
    Data,
    DataStoreService,
} from '../../../core/services/data-store.service'
import { DataBaseService } from '../../../core/services/data-base.service'
import { Subscription } from 'rxjs'
import { Sala } from 'app/models/sala'

export interface wynikiSalePodglad {
    wydzial: string
    numer_sali: string
}

@Component({
    selector: 'srs-tabela-wyszukiwania-sale',
    templateUrl: './tabela-wyszukiwania-sale.component.html',
    styleUrls: ['./tabela-wyszukiwania-sale.component.less'],
})
export class TabelaWyszukiwaniaSaleComponent implements OnInit {
    displayedColumns: string[] = ['wydzial', 'numer_sali', 'pojemnosc', 'akcje']

    saleWyniki: Array<Sala> = []
    dataRezerwacji: Data = {
        dzien: '',
        poczatek: 0,
        koniec: 0,
    }
    activeButton: boolean = false
    subscription: Subscription | undefined
    public isDirty: boolean = false
    private counter: number = 0
    constructor(
        private dataStore: DataStoreService,
        private dataBase: DataBaseService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.subscription = this.dataStore.currentMessage.subscribe((dane) => {
            this.saleWyniki = dane
            this.counter++
            if (dane.length !== 0 || this.counter > 1) {
                this.isDirty = true
            }
            if (dane.length > 0 && this.counter === 1) {
                this.saleWyniki = []
                this.isDirty = false
            }
        })
        this.dataStore.currentDataMessage.subscribe((dane) => {
            this.dataRezerwacji = dane
            if (this.dataRezerwacji.dzien !== '') {
                this.activeButton = true
            } else {
                this.activeButton = false
            }
        })
    }

    public zarezerwujSale(sala: Sala) {
        this.dataBase.addReservation(
            sala,
            1,
            this.dataRezerwacji.dzien,
            this.dataRezerwacji.poczatek,
            this.dataRezerwacji.koniec
        )
        let data = {
            numer: sala.numer,
            dzien: this.dataRezerwacji.dzien,
            poczatek: this.dataRezerwacji.poczatek,
            koniec: this.dataRezerwacji.koniec,
        }
        console.log('Rezerwuje sale...')
        this.router.navigateByUrl('potwierdzenie-rezerwacja', {
            state: { data2: data },
        })
    }

    public podgladSali(sala: Sala): void {
        this.router.navigateByUrl('podglad-sali', {
            state: { dataPodglad: sala },
        })
    }
}
