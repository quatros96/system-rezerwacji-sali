import { Component, OnInit } from '@angular/core'

interface typ {
    value: string
    viewValue: string
}

@Component({
    selector: 'srs-combobox-typ-sali',
    templateUrl: './combobox-typ-sali.component.html',
    styleUrls: ['./combobox-typ-sali.component.less'],
})
export class ComboboxTypSaliComponent implements OnInit {
    typy: typ[] = [
        { value: 'Wykladowa', viewValue: 'Wykładowa' },
        { value: 'Laboratorium', viewValue: 'Laboratorium' },
        { value: 'Dydaktyczna', viewValue: 'Dydaktyczna' },
    ]

    constructor() {}

    ngOnInit(): void {}
}
