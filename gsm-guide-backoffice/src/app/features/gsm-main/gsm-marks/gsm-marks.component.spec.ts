import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmMarksComponent } from './gsm-marks.component';

describe('GsmMarksComponent', () => {
  let component: GsmMarksComponent;
  let fixture: ComponentFixture<GsmMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
