import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodgladSaliComponent } from './podglad-sali.component';

describe('PodgladSaliComponent', () => {
  let component: PodgladSaliComponent;
  let fixture: ComponentFixture<PodgladSaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodgladSaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodgladSaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
