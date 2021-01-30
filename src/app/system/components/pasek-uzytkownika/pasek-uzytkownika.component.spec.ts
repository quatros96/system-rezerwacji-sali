import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasekUzytkownikaComponent } from './pasek-uzytkownika.component';

describe('PasekUzytkownikaComponent', () => {
  let component: PasekUzytkownikaComponent;
  let fixture: ComponentFixture<PasekUzytkownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasekUzytkownikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasekUzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
