import { Component, OnInit } from '@angular/core'

interface wydzialy {
    value: string
    viewValue: string
}

@Component({
    selector: 'srs-combobox-wydzial',
    templateUrl: './combobox-wydzial.component.html',
    styleUrls: ['./combobox-wydzial.component.less'],
})
export class ComboboxWydzialComponent implements OnInit {
    wydzialyy: wydzialy[] = [
        { value: 'Mechatorniki', viewValue: 'Mechatroniki' },
        {
            value: 'Samochodów i Maszyn Roboczych',
            viewValue: 'Samochodów i Maszyn Roboczych',
        },
    ]

    constructor() {}

    ngOnInit(): void {}
}
