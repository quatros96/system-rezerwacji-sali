import { Component, OnInit } from '@angular/core'
import { rezerwacjaPodglad } from '../../../models/moja-rezerwacja-podglad'

interface godziny {
    godzina: string
    status: string
}

@Component({
    selector: 'srs-rezerwacja-mod',
    templateUrl: './rezerwacja-mod.component.html',
    styleUrls: ['./rezerwacja-mod.component.less'],
})
export class RezerwacjaModComponent implements OnInit {
    displayedColumns1: string[] = ['wydzial', 'numer_sali', 'data']

    mojeRezerwacje1: Array<rezerwacjaPodglad> = [
        {
            wydzial: 'Mechatroniki',
            numer_sali: '69',
            data_start: new Date().toISOString(),
            data_end: new Date().toISOString(),
        },
    ]

    displayedColumns: string[] = ['godzina', 'akcje']

    mojeRezerwacje: Array<godziny> = [
        {
            godzina: '8:00 - 9:00',

            status: 'zajęta',
        },

        {
            godzina: '9:00 - 10:00',

            status: 'wolna',
        },

        {
            godzina: '10:00 - 11:00',

            status: 'wolna',
        },

        {
            godzina: '11:00 - 12:00',

            status: 'zajęta',
        },
    ]

    constructor() {}

    ngOnInit(): void {}
}
