import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotwierdzenieModyfikacjiComponent } from './potwierdzenie-modyfikacji.component';

describe('PotwierdzenieModyfikacjiComponent', () => {
  let component: PotwierdzenieModyfikacjiComponent;
  let fixture: ComponentFixture<PotwierdzenieModyfikacjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotwierdzenieModyfikacjiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotwierdzenieModyfikacjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
