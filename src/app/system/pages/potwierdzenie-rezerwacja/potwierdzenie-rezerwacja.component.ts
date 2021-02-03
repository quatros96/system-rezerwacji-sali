import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'srs-potwierdzenie-rezerwacja',
    templateUrl: './potwierdzenie-rezerwacja.component.html',
    styleUrls: ['./potwierdzenie-rezerwacja.component.less'],
})
export class PotwierdzenieRezerwacjaComponent implements OnInit {
    constructor() {}
    public dane: any
    ngOnInit(): void {
        this.dane = history.state.data2
    }
}
