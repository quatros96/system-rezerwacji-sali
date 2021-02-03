import { Injectable } from '@angular/core'
import { Sala } from 'app/models/sala'
import { BehaviorSubject } from 'rxjs'

export interface Data {
    dzien: string
    poczatek: number
    koniec: number
}

@Injectable({
    providedIn: 'root',
})
export class DataStoreService {
    public default: Array<Sala> = []
    public dataRezerwacji: Data = {
        dzien: '',
        poczatek: 0,
        koniec: 0,
    }
    private messageSource = new BehaviorSubject(this.default)
    private dataSource = new BehaviorSubject(this.dataRezerwacji)
    currentMessage = this.messageSource.asObservable()
    currentDataMessage = this.dataSource.asObservable()

    constructor() {}

    changeMessage(daneTabelka: Array<Sala>) {
        this.messageSource.next(daneTabelka)
    }

    changeData(dane: Data) {
        this.dataSource.next(dane)
    }
}
