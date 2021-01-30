import { Component, OnInit } from '@angular/core'
import { rezerwacjaPodglad } from '../../../models/moja-rezerwacja-podglad'
import { DataBaseService } from '../../../core/services/data-base.service'

@Component({
    selector: 'srs-moje-rezerwacje',
    templateUrl: './moje-rezerwacje.component.html',
    styleUrls: ['./moje-rezerwacje.component.less'],
})
export class MojeRezerwacjeComponent implements OnInit {
    displayedColumns: string[] = ['wydzial', 'numer_sali', 'data', 'akcje']
    daneTestowe: any
    daneFiltr: any
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

    constructor(private dataBase: DataBaseService) {
        this.dataBase.getDane().subscribe((dane) => {
            this.daneTestowe = dane
            console.log(dane)
        })
        this.dataBase.getUserReservations().subscribe((dane) => {
            this.daneFiltr = dane
            console.log(dane)
        })
    }

    ngOnInit(): void {}
}
