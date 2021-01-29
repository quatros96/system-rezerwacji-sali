import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComboboxTypSaliComponent } from './combobox-typ-sali.component'

describe('ComboboxTypSaliComponent', () => {
    let component: ComboboxTypSaliComponent
    let fixture: ComponentFixture<ComboboxTypSaliComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComboboxTypSaliComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ComboboxTypSaliComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
