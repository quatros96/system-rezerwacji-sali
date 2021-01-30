import { Component, OnInit } from '@angular/core'
import { mojesalePodglad } from 'app/models/moje-sale-podglad'

@Component({
    selector: 'srs-moje-sale',
    templateUrl: './moje-sale.component.html',
    styleUrls: ['./moje-sale.component.less'],
})
export class MojeSaleComponent implements OnInit {
    displayedColumns: string[] = ['wydzial', 'nr_sali', 'akcje']

    public mojeSale: Array<mojesalePodglad> = [
        {
            wydzial: 'Mechatroniki',
            nr_sali: '234',
        },
        {
            wydzial: 'Mechatroniki',
            nr_sali: '123',
        },
    ]

    constructor() {}

    ngOnInit(): void {}
}
