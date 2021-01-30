import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezerwacjaModComponent } from './rezerwacja-mod.component';

describe('RezerwacjaModComponent', () => {
  let component: RezerwacjaModComponent;
  let fixture: ComponentFixture<RezerwacjaModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezerwacjaModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezerwacjaModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
