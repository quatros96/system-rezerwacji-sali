import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotwierdzenieRezerwacjaComponent } from './potwierdzenie-rezerwacja.component';

describe('PotwierdzenieRezerwacjaComponent', () => {
  let component: PotwierdzenieRezerwacjaComponent;
  let fixture: ComponentFixture<PotwierdzenieRezerwacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotwierdzenieRezerwacjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotwierdzenieRezerwacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
