import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostepnoscComponent } from './dostepnosc.component';

describe('DostepnoscComponent', () => {
  let component: DostepnoscComponent;
  let fixture: ComponentFixture<DostepnoscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DostepnoscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DostepnoscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
