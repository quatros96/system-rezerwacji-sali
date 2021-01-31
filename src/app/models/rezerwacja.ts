import { Godzina } from './godzina'

export interface Rezerwacja {
    date: string
    godziny: Array<Godzina>
}
