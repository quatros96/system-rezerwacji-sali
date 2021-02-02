import { Injectable } from '@angular/core'
import { Sala } from 'app/models/sala'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class DataStoreService {
    public default: Array<Sala> = []
    private messageSource = new BehaviorSubject(this.default)
    currentMessage = this.messageSource.asObservable()

    constructor() {}

    changeMessage(daneTabelka: Array<Sala>) {
        this.messageSource.next(daneTabelka)
    }
}
