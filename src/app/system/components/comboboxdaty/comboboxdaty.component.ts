import { Component, OnInit } from '@angular/core'

interface liczby {
    value: number
    viewValue: number
}

@Component({
    selector: 'srs-comboboxdaty',
    templateUrl: './comboboxdaty.component.html',
    styleUrls: ['./comboboxdaty.component.less'],
})
export class ComboboxdatyComponent implements OnInit {
    zbior: liczby[] = [
        { value: 8, viewValue: 8 },
        { value: 9, viewValue: 9 },
        { value: 10, viewValue: 10 },
        { value: 11, viewValue: 11 },
        { value: 12, viewValue: 12 },
        { value: 13, viewValue: 13 },
        { value: 14, viewValue: 14 },
        { value: 15, viewValue: 15 },
        { value: 16, viewValue: 16 },
        { value: 17, viewValue: 17 },
        { value: 18, viewValue: 18 },
    ]

    constructor() {}

    ngOnInit(): void {}
}
