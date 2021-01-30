import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MojeRezerwacjeComponent } from './moje-rezerwacje.component'

describe('MojeRezerwacjeComponent', () => {
    let component: MojeRezerwacjeComponent
    let fixture: ComponentFixture<MojeRezerwacjeComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MojeRezerwacjeComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(MojeRezerwacjeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
