import { Component, OnInit } from '@angular/core'
import { rezerwacjaPodglad } from '../../../models/moja-rezerwacja-podglad'
import { DataBaseService } from '../../../core/services/data-base.service'
import { Sala } from 'app/models/sala'

@Component({
    selector: 'srs-moje-rezerwacje',
    templateUrl: './moje-rezerwacje.component.html',
    styleUrls: ['./moje-rezerwacje.component.less'],
})
export class MojeRezerwacjeComponent implements OnInit {
    displayedColumns: string[] = ['wydzial', 'numer_sali', 'data', 'akcje']
    userReservations: Array<Sala> = []

    constructor(private dataBase: DataBaseService) {
        // this.dataBase.getUserReservations().subscribe((dane: Array<Sala>) => {
        //     this.userReservations = dane
        //     console.log(dane)
        // })
    }

    ngOnInit(): void {}
}
