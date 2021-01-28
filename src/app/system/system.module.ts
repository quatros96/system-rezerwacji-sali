import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'

import { SharedModule } from '../shared/shared.module'

import { PanelComponent } from './pages/panel/panel.component'
import { WyszukiwarkaSalComponent } from './pages/wyszukiwarka-sal/wyszukiwarka-sal.component'
import { PodgladSaliComponent } from './pages/podglad-sali/podglad-sali.component'
import { MojeAkcjeComponent } from './components/moje-akcje/moje-akcje.component'
import { MojeRezerwacjeComponent } from './components/moje-rezerwacje/moje-rezerwacje.component'

@NgModule({
    declarations: [
        PanelComponent,
        WyszukiwarkaSalComponent,
        PodgladSaliComponent,
        MojeAkcjeComponent,
        MojeRezerwacjeComponent,
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        SharedModule,
        RouterModule,
    ],
})
export class SystemModule {}
