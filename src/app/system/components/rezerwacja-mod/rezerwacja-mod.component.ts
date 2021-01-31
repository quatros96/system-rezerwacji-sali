import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { testRezerwacja } from 'app/core/services/data-base.service'
import { rezerwacjaPodglad } from '../../../models/moja-rezerwacja-podglad'
import { DataBaseService } from '../../../core/services/data-base.service'

interface godziny {
    godzinaOd: number
    godzinaDo: number
    status: string
}

@Component({
    selector: 'srs-rezerwacja-mod',
    templateUrl: './rezerwacja-mod.component.html',
    styleUrls: ['./rezerwacja-mod.component.less'],
})
export class RezerwacjaModComponent implements OnInit {
    displayedColumns1: string[] = ['wydzial', 'numer_sali', 'data']
    @Input() rezerwacjaUzytkownika: testRezerwacja[] = []
    public rezerwacje: testRezerwacja[] = []
    displayedColumns: string[] = ['godzina', 'status', 'akcje']

    stanCheckboxow: Array<boolean> = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]

    constructor(private dataBase: DataBaseService, private router: Router) {}

    ngOnInit(): void {
        this.dataBase
            .getReservationsBySalaIDzien(
                this.rezerwacjaUzytkownika[0].sala,
                this.rezerwacjaUzytkownika[0].dzien
            )
            .subscribe((data) => {
                this.rezerwacje = data
                this.rezerwacje.forEach((rezerwacja) => {
                    //let hStart = new Date(rezerwacja.poczatek * 1000).getHours()
                    let hStart = rezerwacja.poczatek
                    //let hEnd = new Date(rezerwacja.koniec * 1000).getHours()
                    let hEnd = rezerwacja.koniec
                    let index = 0
                    for (let rzad of this.mojeRezerwacje) {
                        if (
                            rzad.godzinaOd >= hStart &&
                            rzad.godzinaDo <= hEnd
                        ) {
                            if (
                                rezerwacja.uzytkownik ===
                                this.rezerwacjaUzytkownika[0].uzytkownik
                            ) {
                                rzad.status = 'Zajęta(TY)'
                                this.stanCheckboxow[index] = true
                            } else {
                                rzad.status = 'Zajęta'
                            }
                        }
                        index++
                    }
                })
            })
    }

    public zmienRezerwacje(): void {
        let godzinaOd
        let godzinaDo
        for (let index = 0; index < this.stanCheckboxow.length; index++) {
            if (this.stanCheckboxow[index]) {
                if (!godzinaOd) {
                    godzinaOd = index + 8
                }
            }
            if (!this.stanCheckboxow[index]) {
                if (godzinaOd && !godzinaDo) {
                    godzinaDo = index + 8
                }
            }
        }
        if (!godzinaDo) {
            godzinaDo = 20
        }
        if (this.rezerwacjaUzytkownika[0].id && godzinaOd && godzinaDo) {
            this.dataBase.updateReservation(
                this.rezerwacjaUzytkownika[0].id,
                godzinaOd,
                godzinaDo
            )
        }
        this.router.navigateByUrl('potwierdzenie-modyfikacji')
    }
    public anulujRezerwacje(): void {
        console.log(
            `Anulowanie rezerwacji: ${this.rezerwacjaUzytkownika[0].id}`
        )
        if (this.rezerwacjaUzytkownika[0].id) {
            this.dataBase.deleteReservation(this.rezerwacjaUzytkownika[0].id)
        }
        this.router.navigateByUrl('panel')
    }

    mojeRezerwacje: Array<godziny> = [
        {
            godzinaOd: 8,
            godzinaDo: 9,
            status: 'Wolna',
        },
        {
            godzinaOd: 9,
            godzinaDo: 10,
            status: 'Wolna',
        },
        {
            godzinaOd: 10,
            godzinaDo: 11,
            status: 'Wolna',
        },
        {
            godzinaOd: 11,
            godzinaDo: 12,
            status: 'Wolna',
        },
        {
            godzinaOd: 12,
            godzinaDo: 13,
            status: 'Wolna',
        },
        {
            godzinaOd: 13,
            godzinaDo: 14,
            status: 'Wolna',
        },
        {
            godzinaOd: 14,
            godzinaDo: 15,
            status: 'Wolna',
        },
        {
            godzinaOd: 15,
            godzinaDo: 16,
            status: 'Wolna',
        },
        {
            godzinaOd: 16,
            godzinaDo: 17,
            status: 'Wolna',
        },
        {
            godzinaOd: 17,
            godzinaDo: 18,
            status: 'Wolna',
        },
        {
            godzinaOd: 18,
            godzinaDo: 19,
            status: 'Wolna',
        },
        {
            godzinaOd: 19,
            godzinaDo: 20,
            status: 'Wolna',
        },
    ]
}
