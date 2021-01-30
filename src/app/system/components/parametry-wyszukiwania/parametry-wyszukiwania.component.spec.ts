import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametryWyszukiwaniaComponent } from './parametry-wyszukiwania.component';

describe('ParametryWyszukiwaniaComponent', () => {
  let component: ParametryWyszukiwaniaComponent;
  let fixture: ComponentFixture<ParametryWyszukiwaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametryWyszukiwaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametryWyszukiwaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
