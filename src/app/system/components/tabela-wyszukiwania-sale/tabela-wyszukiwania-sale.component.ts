import { Component, OnInit } from '@angular/core'
import { DataStoreService } from '../../../core/services/data-store.service'
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
    displayedColumns: string[] = ['wydzial', 'numer_sali', 'akcje']

    saleWyniki: Array<Sala> = []
    subscription: Subscription | undefined
    constructor(private dataStore: DataStoreService) {}

    ngOnInit(): void {
        this.subscription = this.dataStore.currentMessage.subscribe((dane) => {
            this.saleWyniki = dane
        })
    }
}
