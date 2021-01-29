import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WynikWyszukiwanieSalComponent } from './wynik-wyszukiwanie-sal.component'

describe('WynikWyszukiwanieSalComponent', () => {
    let component: WynikWyszukiwanieSalComponent
    let fixture: ComponentFixture<WynikWyszukiwanieSalComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WynikWyszukiwanieSalComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(WynikWyszukiwanieSalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
