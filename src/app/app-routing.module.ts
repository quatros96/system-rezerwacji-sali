import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PanelComponent } from './system/pages/panel/panel.component'
import { WyszukiwarkaSalComponent } from './system/pages/wyszukiwarka-sal/wyszukiwarka-sal.component'
import { PodgladSaliComponent } from './system/pages/podglad-sali/podglad-sali.component'
import { MojeSaleComponent } from './system/pages/moje-sale/moje-sale.component'

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
