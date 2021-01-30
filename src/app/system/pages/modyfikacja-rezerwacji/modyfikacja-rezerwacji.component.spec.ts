import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModyfikacjaRezerwacjiComponent } from './modyfikacja-rezerwacji.component';

describe('ModyfikacjaRezerwacjiComponent', () => {
  let component: ModyfikacjaRezerwacjiComponent;
  let fixture: ComponentFixture<ModyfikacjaRezerwacjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModyfikacjaRezerwacjiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModyfikacjaRezerwacjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
