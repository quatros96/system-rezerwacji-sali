import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZglaszanieUsterkiComponent } from './zglaszanie-usterki.component';

describe('ZglaszanieUsterkiComponent', () => {
  let component: ZglaszanieUsterkiComponent;
  let fixture: ComponentFixture<ZglaszanieUsterkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZglaszanieUsterkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZglaszanieUsterkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
