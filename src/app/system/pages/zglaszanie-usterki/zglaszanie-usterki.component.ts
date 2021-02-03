import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Sala } from 'app/models/sala'
import { FormBuilder, Validators } from '@angular/forms'
import { DataBaseService } from '../../../core/services/data-base.service'
import { Usterka } from 'app/models/usterka'

interface Priorytet {
    value: string
    viewValue: string
}

interface Eq {
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
            value: '1',
            viewValue: 'Niski',
        },
        {
            value: '2',
            viewValue: 'Średni',
        },
        {
            value: '3',
            viewValue: 'Wysoki',
        },
    ]

    public wyposazenie: Array<Eq> = [
        {
            value: 'komputer',
            viewValue: 'Komputer',
        },
        {
            value: 'klima',
            viewValue: 'Klimatyzacja',
        },
        {
            value: 'rzutnik',
            viewValue: 'Rzutnik',
        },
        {
            value: 'tablica',
            viewValue: 'Tablica',
        },
        {
            value: 'inne',
            viewValue: 'Inne',
        },
    ]

    public sala: Sala | undefined

    constructor(
        private fb: FormBuilder,
        private dataBase: DataBaseService,
        private router: Router
    ) {}

    public usterkaForm = this.fb.group({
        tytul: ['', Validators.required],
        priorytet: ['', Validators.required],
        eq: ['', Validators.required],
        opis: ['', Validators.required],
    })

    ngOnInit(): void {
        this.sala = history.state.salaDoUsterki
    }

    public zglosUsterke(): void {
        let usterka: Usterka = {
            tytul: this.usterkaForm.get('tytul')?.value,
            priorytet: Number(this.usterkaForm.get('priorytet')?.value),
            eq: this.usterkaForm.get('eq')?.value,
            opis: this.usterkaForm.get('opis')?.value,
        }
        if (this.sala) {
            this.dataBase.reportIssue(this.sala, usterka)
        }
        if (this.usterkaForm.get('eq')?.value != 'inne' && this.sala?.iddoc) {
            this.dataBase.addIssueToRoom(
                this.sala.iddoc,
                this.usterkaForm.get('eq')?.value
            )
        }
        this.router.navigateByUrl('potwierdzenie-usterka')
    }
}
