import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'

import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module'

import { SystemModule } from './system/system.module'
import { MAT_DATE_LOCALE } from '@angular/material/core'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        SystemModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
