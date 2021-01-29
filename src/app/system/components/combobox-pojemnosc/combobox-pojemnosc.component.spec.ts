import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComboboxPojemnoscComponent } from './combobox-pojemnosc.component'

describe('ComboboxPojemnoscComponent', () => {
    let component: ComboboxPojemnoscComponent
    let fixture: ComponentFixture<ComboboxPojemnoscComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComboboxPojemnoscComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ComboboxPojemnoscComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
