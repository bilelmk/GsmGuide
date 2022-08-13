import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmClientsModalComponent } from './gsm-clients-modal.component';

describe('GsmClientsModalComponent', () => {
  let component: GsmClientsModalComponent;
  let fixture: ComponentFixture<GsmClientsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmClientsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmClientsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
