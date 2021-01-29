import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NrsaliComponent } from './nrsali.component';

describe('NrsaliComponent', () => {
  let component: NrsaliComponent;
  let fixture: ComponentFixture<NrsaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NrsaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NrsaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
