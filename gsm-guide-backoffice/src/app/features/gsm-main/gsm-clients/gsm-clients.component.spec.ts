import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmClientsComponent } from './gsm-clients.component';

describe('GsmClientsComponent', () => {
  let component: GsmClientsComponent;
  let fixture: ComponentFixture<GsmClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
