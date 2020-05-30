import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamoriesComponent } from './mamories.component';

describe('MamoriesComponent', () => {
  let component: MamoriesComponent;
  let fixture: ComponentFixture<MamoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
