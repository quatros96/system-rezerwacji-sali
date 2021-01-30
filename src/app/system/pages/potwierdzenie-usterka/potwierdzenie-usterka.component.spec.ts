import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotwierdzenieUsterkaComponent } from './potwierdzenie-usterka.component';

describe('PotwierdzenieUsterkaComponent', () => {
  let component: PotwierdzenieUsterkaComponent;
  let fixture: ComponentFixture<PotwierdzenieUsterkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotwierdzenieUsterkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotwierdzenieUsterkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
