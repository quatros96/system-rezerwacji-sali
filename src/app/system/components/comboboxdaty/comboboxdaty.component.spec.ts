import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxdatyComponent } from './comboboxdaty.component';

describe('ComboboxdatyComponent', () => {
  let component: ComboboxdatyComponent;
  let fixture: ComponentFixture<ComboboxdatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboboxdatyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxdatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
