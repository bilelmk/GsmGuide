import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmStatisticsRepairersComponent } from './gsm-statistics-repairers.component';

describe('GsmStatisticsRepairersComponent', () => {
  let component: GsmStatisticsRepairersComponent;
  let fixture: ComponentFixture<GsmStatisticsRepairersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmStatisticsRepairersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmStatisticsRepairersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
