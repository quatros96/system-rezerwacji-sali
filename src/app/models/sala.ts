import { Equipment } from './equipment'
import { Rezerwacja } from './rezerwacja'

export interface Sala {
    id: string
    numer: string
    pojemnosc: number
    typ: string
    wydzial: string
    iddoc?: string
}
