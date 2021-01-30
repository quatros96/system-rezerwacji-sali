import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotwierdzenieNadaniaDostepuComponent } from './potwierdzenie-nadania-dostepu.component';

describe('PotwierdzenieNadaniaDostepuComponent', () => {
  let component: PotwierdzenieNadaniaDostepuComponent;
  let fixture: ComponentFixture<PotwierdzenieNadaniaDostepuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotwierdzenieNadaniaDostepuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotwierdzenieNadaniaDostepuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
