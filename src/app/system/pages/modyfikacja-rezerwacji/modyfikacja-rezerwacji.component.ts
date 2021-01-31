import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'srs-modyfikacja-rezerwacji',
    templateUrl: './modyfikacja-rezerwacji.component.html',
    styleUrls: ['./modyfikacja-rezerwacji.component.less'],
})
export class ModyfikacjaRezerwacjiComponent implements OnInit {
    constructor() {}
    public rezerwacja: any
    ngOnInit(): void {
        this.rezerwacja = history.state.data
    }
}
