import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoutiesComponent } from './favouties.component';

describe('FavoutiesComponent', () => {
  let component: FavoutiesComponent;
  let fixture: ComponentFixture<FavoutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
