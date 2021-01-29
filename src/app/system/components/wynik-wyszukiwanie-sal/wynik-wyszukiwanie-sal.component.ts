import { Component, OnInit } from '@angular/core'
import { wynikiSalePodglad } from '../../../models/moja-rezerwacja-podglad'

@Component({
    selector: 'srs-wynik-wyszukiwanie-sal',
    templateUrl: './wynik-wyszukiwanie-sal.component.html',
    styleUrls: ['./wynik-wyszukiwanie-sal.component.less'],
})
export class WynikWyszukiwanieSalComponent implements OnInit {
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
