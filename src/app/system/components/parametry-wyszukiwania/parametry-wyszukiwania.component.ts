import { Component, OnInit } from '@angular/core'

interface wydzialy {
    value: string
    viewValue: string
}

interface typ {
    value: string
    viewValue: string
}

interface liczby {
    value: number
    viewValue: number
}

@Component({
    selector: 'srs-parametry-wyszukiwania',
    templateUrl: './parametry-wyszukiwania.component.html',
    styleUrls: ['./parametry-wyszukiwania.component.less'],
})
export class ParametryWyszukiwaniaComponent implements OnInit {
    wydzialyy: wydzialy[] = [
        { value: 'Mechatorniki', viewValue: 'Mechatroniki' },
        {
            value: 'Samochodów i Maszyn Roboczych',
            viewValue: 'Samochodów i Maszyn Roboczych',
        },
    ]

    typy: typ[] = [
        { value: 'Wykladowa', viewValue: 'Wykładowa' },
        { value: 'Laboratorium', viewValue: 'Laboratorium' },
        { value: 'Dydaktyczna', viewValue: 'Dydaktyczna' },
    ]

    zbior: liczby[] = [
        { value: 1, viewValue: 1 },
        { value: 2, viewValue: 2 },
        { value: 3, viewValue: 3 },
    ]
    constructor() {}

    ngOnInit(): void {}
}
