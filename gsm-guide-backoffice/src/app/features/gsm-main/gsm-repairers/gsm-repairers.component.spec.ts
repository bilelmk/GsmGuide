import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmRepairersComponent } from './gsm-repairers.component';

describe('GsmRepairersComponent', () => {
  let component: GsmRepairersComponent;
  let fixture: ComponentFixture<GsmRepairersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmRepairersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmRepairersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
