import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
import { MatCheckboxModule } from '@angular/material/checkbox'

import { SharedModule } from '../shared/shared.module'

import { PanelComponent } from './pages/panel/panel.component'
import { WyszukiwarkaSalComponent } from './pages/wyszukiwarka-sal/wyszukiwarka-sal.component'
import { PodgladSaliComponent } from './pages/podglad-sali/podglad-sali.component'
import { MojeAkcjeComponent } from './components/moje-akcje/moje-akcje.component'
import { MojeRezerwacjeComponent } from './components/moje-rezerwacje/moje-rezerwacje.component'
import { WynikWyszukiwanieSalComponent } from './components/wynik-wyszukiwanie-sal/wynik-wyszukiwanie-sal.component'
import { ComboboxWydzialComponent } from './components/combobox-wydzial/combobox-wydzial.component'
import { ComboboxTypSaliComponent } from './components/combobox-typ-sali/combobox-typ-sali.component'
import { ComboboxPojemnoscComponent } from './components/combobox-pojemnosc/combobox-pojemnosc.component'
import { ComboboxdatyComponent } from './components/comboboxdaty/comboboxdaty.component'
import { NrsaliComponent } from './components/nrsali/nrsali.component'
import { WyposazenieComponent } from './components/wyposazenie/wyposazenie.component';
import { ButtonWyszukajComponent } from './components/button-wyszukaj/button-wyszukaj.component'

@NgModule({
    declarations: [
        PanelComponent,
        WyszukiwarkaSalComponent,
        PodgladSaliComponent,
        MojeAkcjeComponent,
        MojeRezerwacjeComponent,
        WynikWyszukiwanieSalComponent,
        ComboboxWydzialComponent,
        ComboboxTypSaliComponent,
        ComboboxPojemnoscComponent,
        ComboboxdatyComponent,
        NrsaliComponent,
        WyposazenieComponent,
        ButtonWyszukajComponent,
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        SharedModule,
        RouterModule,
        MatDatepickerModule,
        TextFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatCheckboxModule,
    ],
})
export class SystemModule {}
