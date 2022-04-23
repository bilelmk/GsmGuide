import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmRepairersModalComponent } from './gsm-repairers-modal.component';

describe('GsmRepairersModalComponent', () => {
  let component: GsmRepairersModalComponent;
  let fixture: ComponentFixture<GsmRepairersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmRepairersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmRepairersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
