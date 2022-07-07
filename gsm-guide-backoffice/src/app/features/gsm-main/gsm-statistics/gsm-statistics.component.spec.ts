import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmStatisticsComponent } from './gsm-statistics.component';

describe('GsmStatisticsComponent', () => {
  let component: GsmStatisticsComponent;
  let fixture: ComponentFixture<GsmStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
