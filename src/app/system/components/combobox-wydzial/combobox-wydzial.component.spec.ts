import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ComboboxWydzialComponent } from './combobox-wydzial.component'

describe('ComboboxWydzialComponent', () => {
    let component: ComboboxWydzialComponent
    let fixture: ComponentFixture<ComboboxWydzialComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComboboxWydzialComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ComboboxWydzialComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
