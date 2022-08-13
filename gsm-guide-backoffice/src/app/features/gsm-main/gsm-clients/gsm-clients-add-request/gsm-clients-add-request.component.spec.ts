import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmClientsAddRequestComponent } from './gsm-clients-add-request.component';

describe('GsmClientsAddRequestComponent', () => {
  let component: GsmClientsAddRequestComponent;
  let fixture: ComponentFixture<GsmClientsAddRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmClientsAddRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmClientsAddRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
