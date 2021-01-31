import { Equipment } from './equipment'
import { Rezerwacja } from './rezerwacja'

export interface Sala {
    numer: number
    opiekunid: number
    poj: number
    przynaleznosc: string
    typ: string
    eq: Equipment
    rezerwacje: Array<Rezerwacja>
}
