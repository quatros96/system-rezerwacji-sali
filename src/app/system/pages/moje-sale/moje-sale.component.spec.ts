import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeSaleComponent } from './moje-sale.component';

describe('MojeSaleComponent', () => {
  let component: MojeSaleComponent;
  let fixture: ComponentFixture<MojeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojeSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
