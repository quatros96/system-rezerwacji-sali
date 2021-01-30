import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PanelComponent } from './system/pages/panel/panel.component'
import { WyszukiwarkaSalComponent } from './system/pages/wyszukiwarka-sal/wyszukiwarka-sal.component'
import { PodgladSaliComponent } from './system/pages/podglad-sali/podglad-sali.component'
import { MojeSaleComponent } from './system/pages/moje-sale/moje-sale.component'
import { ZglaszanieUsterkiComponent } from './system/pages/zglaszanie-usterki/zglaszanie-usterki.component'
import { PotwierdzenieUsterkaComponent } from './system/pages/potwierdzenie-usterka/potwierdzenie-usterka.component'
import { PotwierdzenieRezerwacjaComponent } from './system/pages/potwierdzenie-rezerwacja/potwierdzenie-rezerwacja.component'
import { PotwierdzenieModyfikacjiComponent } from './system/pages/potwierdzenie-modyfikacji/potwierdzenie-modyfikacji.component'
import { PotwierdzenieNadaniaDostepuComponent } from './system/pages/potwierdzenie-nadania-dostepu/potwierdzenie-nadania-dostepu.component'

const routes: Routes = [
    {
        path: 'panel',
        component: PanelComponent,
    },
    {
        path: 'wyszukiwarka-sal',
        component: WyszukiwarkaSalComponent,
    },
    {
        path: 'podglad-sali',
        component: PodgladSaliComponent,
    },
    {
        path: 'moje-sale',
        component: MojeSaleComponent,
    },
    {
        path: 'zglaszanie-usterki',
        component: ZglaszanieUsterkiComponent,
    },
    {
        path: 'potwierdzenie-usterka',
        component: PotwierdzenieUsterkaComponent,
    },
    {
        path: 'potwierdzenie-rezerwacja',
        component: PotwierdzenieRezerwacjaComponent,
    },
    {
        path: 'potwierdzenie-modyfikacji',
        component: PotwierdzenieModyfikacjiComponent,
    },
    {
        path: 'potwierdzenie-nadania-dostepu',
        component: PotwierdzenieNadaniaDostepuComponent,
    },
    {
        path: '**',
        redirectTo: 'panel',
        pathMatch: 'full',
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
