import { Component, OnInit } from '@angular/core'

interface liczby {
    value: number
    viewValue: number
}

@Component({
    selector: 'srs-combobox-pojemnosc',
    templateUrl: './combobox-pojemnosc.component.html',
    styleUrls: ['./combobox-pojemnosc.component.less'],
})
export class ComboboxPojemnoscComponent implements OnInit {
    zbior: liczby[] = [
        { value: 1, viewValue: 1 },
        { value: 2, viewValue: 2 },
        { value: 3, viewValue: 3 },
    ]

    constructor() {}

    ngOnInit(): void {}
}
