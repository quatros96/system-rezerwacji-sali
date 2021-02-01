import { Component, OnInit } from '@angular/core'
import { rezerwacjaPodglad } from '../../../models/moja-rezerwacja-podglad'
import {
    DataBaseService,
    testRezerwacja,
} from '../../../core/services/data-base.service'
import { Sala } from 'app/models/sala'

@Component({
    selector: 'srs-moje-rezerwacje',
    templateUrl: './moje-rezerwacje.component.html',
    styleUrls: ['./moje-rezerwacje.component.less'],
})
export class MojeRezerwacjeComponent implements OnInit {
    displayedColumns: string[] = ['wydzial', 'numer_sali', 'data', 'akcje']
    userReservations: Array<testRezerwacja> = []
    public pierwszyWarunek1: Array<testRezerwacja> = []
    public pierwszyWarunek2: Array<testRezerwacja> = []
    public drugiWarunek1: Array<testRezerwacja> = []
    public drugiWarunek2: Array<testRezerwacja> = []
    public trzeciWarunek1: Array<testRezerwacja> = []
    public trzeciWarunek2: Array<testRezerwacja> = []
    public czwartyWarunek1: Array<testRezerwacja> = []
    public czwartyWarunek2: Array<testRezerwacja> = []
    constructor(private dataBase: DataBaseService) {
        this.dataBase
            .getUserReseravtions(1)
            .subscribe((dane: testRezerwacja[]) => {
                this.userReservations = dane
            })
        //'24/02/2021', 16, 19
        this.dataBase
            .filterByAvailabilityNKIP('24/02/2021', 16, 19)
            .subscribe((data1) => {
                this.pierwszyWarunek1 = data1
                this.dataBase
                    .filterByAvailabilityNKIK('24/02/2021', 16, 19)
                    .subscribe((data2) => {
                        this.pierwszyWarunek2 = data2
                        this.dataBase
                            .filterByAvailabilityNPIP('24/02/2021', 16, 19)
                            .subscribe((data3) => {
                                this.drugiWarunek1 = data3
                                this.dataBase
                                    .filterByAvailabilityNKIK2(
                                        '24/02/2021',
                                        16,
                                        19
                                    )
                                    .subscribe((data4) => {
                                        this.drugiWarunek2 = data4
                                        this.dataBase
                                            .filterByAvailabilityNPIP2(
                                                '24/02/2021',
                                                16,
                                                19
                                            )
                                            .subscribe((data5) => {
                                                this.trzeciWarunek1 = data5
                                                this.dataBase
                                                    .filterByAvailabilityNPIK(
                                                        '24/02/2021',
                                                        16,
                                                        19
                                                    )
                                                    .subscribe((data6) => {
                                                        this.trzeciWarunek2 = data6
                                                        this.dataBase
                                                            .filterByAvailabilityNPIP3(
                                                                '24/02/2021',
                                                                16,
                                                                19
                                                            )
                                                            .subscribe(
                                                                (data7) => {
                                                                    this.czwartyWarunek1 = data7
                                                                    this.dataBase
                                                                        .filterByAvailabilityNKIK3(
                                                                            '24/02/2021',
                                                                            16,
                                                                            19
                                                                        )
                                                                        .subscribe(
                                                                            (
                                                                                data8
                                                                            ) => {
                                                                                this.czwartyWarunek2 = data8
                                                                                console.log(
                                                                                    this
                                                                                        .czwartyWarunek2
                                                                                )
                                                                                console.log(
                                                                                    [
                                                                                        1,
                                                                                        2,
                                                                                        3,
                                                                                        4,
                                                                                    ]
                                                                                )
                                                                                this.dawajTeWarunki(
                                                                                    this
                                                                                        .pierwszyWarunek1,
                                                                                    this
                                                                                        .pierwszyWarunek2,
                                                                                    this
                                                                                        .drugiWarunek1,
                                                                                    this
                                                                                        .drugiWarunek2,
                                                                                    this
                                                                                        .trzeciWarunek1,
                                                                                    this
                                                                                        .trzeciWarunek2,
                                                                                    this
                                                                                        .czwartyWarunek1,
                                                                                    this
                                                                                        .czwartyWarunek2
                                                                                )
                                                                            }
                                                                        )
                                                                }
                                                            )
                                                    })
                                            })
                                    })
                            })
                    })
            })
    }

    public dawajTeWarunki(
        pier1: Array<any>,
        pier2: Array<any>,
        drug1: Array<any>,
        drug2: Array<any>,
        trz1: Array<any>,
        trz2: Array<any>,
        czt1: Array<any>,
        czt2: Array<any>
    ): Array<any> {
        let wynik1: Array<testRezerwacja> = []
        let wynik2: Array<testRezerwacja> = []
        let wynik3: Array<testRezerwacja> = []
        let wynik4: Array<testRezerwacja> = []
        for (let rezerwacja1 of pier1) {
            for (let rezerwacja2 of pier2) {
                if (this.haveSameData(rezerwacja1, rezerwacja2)) {
                    if (!wynik1.includes(rezerwacja1)) {
                        wynik1.push(rezerwacja1)
                    }
                }
            }
        }
        for (let rezerwacja1 of drug1) {
            for (let rezerwacja2 of drug2) {
                if (this.haveSameData(rezerwacja1, rezerwacja2)) {
                    if (!wynik2.includes(rezerwacja1)) {
                        wynik2.push(rezerwacja1)
                    }
                }
            }
        }
        for (let rezerwacja1 of trz1) {
            for (let rezerwacja2 of trz2) {
                if (this.haveSameData(rezerwacja1, rezerwacja2)) {
                    if (!wynik3.includes(rezerwacja1)) {
                        wynik3.push(rezerwacja1)
                    }
                }
            }
        }
        for (let rezerwacja1 of czt1) {
            for (let rezerwacja2 of czt2) {
                if (this.haveSameData(rezerwacja1, rezerwacja2)) {
                    if (!wynik4.includes(rezerwacja1)) {
                        wynik4.push(rezerwacja1)
                    }
                }
            }
        }
        // for (let rezerwacja of drug1) {
        //     if (drug2.indexOf(rezerwacja) > -1) {
        //         wynik2.push(rezerwacja)
        //     }
        // }
        // for (let rezerwacja of trz1) {
        //     if (trz2.indexOf(rezerwacja) > -1) {
        //         wynik3.push(rezerwacja)
        //     }
        // }
        // for (let rezerwacja of czt1) {
        //     if (czt2.indexOf(rezerwacja) > -1) {
        //         wynik4.push(rezerwacja)
        //     }
        // }
        console.log(wynik1)
        console.log(wynik2)
        console.log(wynik3)
        console.log(wynik4)
        return []
    }

    public haveSameData = function (obj1: any, obj2: any) {
        const obj1Length = Object.keys(obj1).length
        const obj2Length = Object.keys(obj2).length

        if (obj1Length === obj2Length) {
            return Object.keys(obj1).every(
                (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
            )
        }
        return false
    }
    ngOnInit(): void {}
}
