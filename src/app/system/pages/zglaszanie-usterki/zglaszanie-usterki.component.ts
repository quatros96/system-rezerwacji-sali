import { Component, OnInit } from '@angular/core'

interface Priorytet {
    value: string
    viewValue: string
}

@Component({
    selector: 'srs-zglaszanie-usterki',
    templateUrl: './zglaszanie-usterki.component.html',
    styleUrls: ['./zglaszanie-usterki.component.less'],
})
export class ZglaszanieUsterkiComponent implements OnInit {
    public priorytety: Array<Priorytet> = [
        {
            value: 'low',
            viewValue: 'Niski',
        },
        {
            value: 'medium',
            viewValue: 'Średni',
        },
        {
            value: 'high',
            viewValue: 'Wysoki',
        },
    ]

    constructor() {}

    ngOnInit(): void {}
}
