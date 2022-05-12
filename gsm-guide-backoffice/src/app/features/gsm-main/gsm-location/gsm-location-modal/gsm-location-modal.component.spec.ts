import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmLocationModalComponent } from './gsm-location-modal.component';

describe('GsmLocationModalComponent', () => {
  let component: GsmLocationModalComponent;
  let fixture: ComponentFixture<GsmLocationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmLocationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
