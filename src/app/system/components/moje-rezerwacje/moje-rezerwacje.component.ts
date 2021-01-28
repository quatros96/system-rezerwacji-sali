import { Component, OnInit } from '@angular/core'
import { rezerwacjaPodglad } from '../../../models/moja-rezerwacja-podglad'

@Component({
    selector: 'srs-moje-rezerwacje',
    templateUrl: './moje-rezerwacje.component.html',
    styleUrls: ['./moje-rezerwacje.component.less'],
})
export class MojeRezerwacjeComponent implements OnInit {
    displayedColumns: string[] = ['wydzial', 'numer_sali', 'data', 'akcje']

    mojeRezerwacje: Array<rezerwacjaPodglad> = [
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
            data_start: new Date().toISOString(),
            data_end: new Date().toISOString(),
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
            data_start: new Date().toISOString(),
            data_end: new Date().toISOString(),
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
            data_start: new Date().toISOString(),
            data_end: new Date().toISOString(),
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
            data_start: new Date().toISOString(),
            data_end: new Date().toISOString(),
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
            data_start: new Date().toISOString(),
            data_end: new Date().toISOString(),
        },
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
            data_start: new Date().toISOString(),
            data_end: new Date().toISOString(),
        },
    ]

    constructor() {}

    ngOnInit(): void {}
}
