import { Component, OnInit } from '@angular/core'
import { Sala } from 'app/models/sala'

@Component({
    selector: 'srs-podglad-sali',
    templateUrl: './podglad-sali.component.html',
    styleUrls: ['./podglad-sali.component.less'],
})
export class PodgladSaliComponent implements OnInit {
    constructor() {}
    public sala: Sala | undefined
    ngOnInit(): void {
        this.sala = history.state.dataPodglad
    }
}
