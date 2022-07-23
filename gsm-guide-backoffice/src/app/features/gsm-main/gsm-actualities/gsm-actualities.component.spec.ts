import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmActualitiesComponent } from './gsm-actualities.component';

describe('GsmActualitiesComponent', () => {
  let component: GsmActualitiesComponent;
  let fixture: ComponentFixture<GsmActualitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmActualitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmActualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
