import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeAkcjeComponent } from './moje-akcje.component';

describe('MojeAkcjeComponent', () => {
  let component: MojeAkcjeComponent;
  let fixture: ComponentFixture<MojeAkcjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojeAkcjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeAkcjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
