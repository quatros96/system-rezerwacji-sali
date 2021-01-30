import { Component, OnInit } from '@angular/core'

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

    mojeRezerwacje: Array<wynikiSalePodglad> = [
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
        },
    ]

    constructor() {}

    ngOnInit(): void {}
}
