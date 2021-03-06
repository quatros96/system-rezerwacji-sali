import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAnalyticsModule } from '@angular/fire/analytics'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { ReactiveFormsModule } from '@angular/forms'
import { environment } from '../../environments/environment'

import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'

import { SharedModule } from '../shared/shared.module'

import { PanelComponent } from './pages/panel/panel.component'
import { WyszukiwarkaSalComponent } from './pages/wyszukiwarka-sal/wyszukiwarka-sal.component'
import { PodgladSaliComponent } from './pages/podglad-sali/podglad-sali.component'
import { MojeAkcjeComponent } from './components/moje-akcje/moje-akcje.component'
import { MojeRezerwacjeComponent } from './components/moje-rezerwacje/moje-rezerwacje.component'
import { ParametryWyszukiwaniaComponent } from './components/parametry-wyszukiwania/parametry-wyszukiwania.component'
import { TabelaWyszukiwaniaSaleComponent } from './components/tabela-wyszukiwania-sale/tabela-wyszukiwania-sale.component'
import { InfoIAkcjeComponent } from './components/info-i-akcje/info-i-akcje.component'
import { DostepnoscComponent } from './components/dostepnosc/dostepnosc.component'
import { MojeSaleComponent } from './pages/moje-sale/moje-sale.component'
import { ZglaszanieUsterkiComponent } from './pages/zglaszanie-usterki/zglaszanie-usterki.component'
import { PotwierdzenieUsterkaComponent } from './pages/potwierdzenie-usterka/potwierdzenie-usterka.component'
import { PotwierdzenieRezerwacjaComponent } from './pages/potwierdzenie-rezerwacja/potwierdzenie-rezerwacja.component'
import { PotwierdzenieModyfikacjiComponent } from './pages/potwierdzenie-modyfikacji/potwierdzenie-modyfikacji.component'
import { PotwierdzenieNadaniaDostepuComponent } from './pages/potwierdzenie-nadania-dostepu/potwierdzenie-nadania-dostepu.component'
import { PasekUzytkownikaComponent } from './components/pasek-uzytkownika/pasek-uzytkownika.component'
import { ModyfikacjaRezerwacjiComponent } from './pages/modyfikacja-rezerwacji/modyfikacja-rezerwacji.component'
import { RezerwacjaModComponent } from './components/rezerwacja-mod/rezerwacja-mod.component'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [
        PanelComponent,
        WyszukiwarkaSalComponent,
        PodgladSaliComponent,
        MojeAkcjeComponent,
        MojeRezerwacjeComponent,
        ParametryWyszukiwaniaComponent,
        TabelaWyszukiwaniaSaleComponent,
        InfoIAkcjeComponent,
        DostepnoscComponent,
        MojeSaleComponent,
        ZglaszanieUsterkiComponent,
        PotwierdzenieUsterkaComponent,
        PotwierdzenieRezerwacjaComponent,
        PotwierdzenieModyfikacjiComponent,
        PotwierdzenieNadaniaDostepuComponent,
        ModyfikacjaRezerwacjiComponent,
        RezerwacjaModComponent,
        PasekUzytkownikaComponent,
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        SharedModule,
        RouterModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        MatDatepickerModule,
        TextFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [PasekUzytkownikaComponent],
})
export class SystemModule {}
