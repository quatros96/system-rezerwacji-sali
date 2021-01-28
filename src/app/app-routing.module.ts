import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PanelComponent } from './system/pages/panel/panel.component'
import { WyszukiwarkaSalComponent } from './system/pages/wyszukiwarka-sal/wyszukiwarka-sal.component'

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
