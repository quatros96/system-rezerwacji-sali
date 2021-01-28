import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyszukiwarkaSalComponent } from './wyszukiwarka-sal.component';

describe('WyszukiwarkaSalComponent', () => {
  let component: WyszukiwarkaSalComponent;
  let fixture: ComponentFixture<WyszukiwarkaSalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyszukiwarkaSalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WyszukiwarkaSalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
