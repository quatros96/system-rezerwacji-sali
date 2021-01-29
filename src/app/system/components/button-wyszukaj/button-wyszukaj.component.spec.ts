import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWyszukajComponent } from './button-wyszukaj.component';

describe('ButtonWyszukajComponent', () => {
  let component: ButtonWyszukajComponent;
  let fixture: ComponentFixture<ButtonWyszukajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWyszukajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWyszukajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
