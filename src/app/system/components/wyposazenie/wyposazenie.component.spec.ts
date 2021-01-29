import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyposazenieComponent } from './wyposazenie.component';

describe('WyposazenieComponent', () => {
  let component: WyposazenieComponent;
  let fixture: ComponentFixture<WyposazenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyposazenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WyposazenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
