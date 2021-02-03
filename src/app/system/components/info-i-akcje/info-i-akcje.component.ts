import { Component, Input, OnInit } from '@angular/core'
import { Sala } from 'app/models/sala'

@Component({
    selector: 'srs-info-i-akcje',
    templateUrl: './info-i-akcje.component.html',
    styleUrls: ['./info-i-akcje.component.less'],
})
export class InfoIAkcjeComponent implements OnInit {
    @Input() sala: Sala | undefined

    constructor() {}

    ngOnInit(): void {}
}
