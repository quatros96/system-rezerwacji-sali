import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TabelaWyszukiwaniaSaleComponent } from './tabela-wyszukiwania-sale.component'

describe('TabelaWyszukiwaniaSaleComponent', () => {
    let component: TabelaWyszukiwaniaSaleComponent
    let fixture: ComponentFixture<TabelaWyszukiwaniaSaleComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TabelaWyszukiwaniaSaleComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(TabelaWyszukiwaniaSaleComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
