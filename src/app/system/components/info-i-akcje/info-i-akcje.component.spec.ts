import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIAkcjeComponent } from './info-i-akcje.component';

describe('InfoIAkcjeComponent', () => {
  let component: InfoIAkcjeComponent;
  let fixture: ComponentFixture<InfoIAkcjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoIAkcjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoIAkcjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
