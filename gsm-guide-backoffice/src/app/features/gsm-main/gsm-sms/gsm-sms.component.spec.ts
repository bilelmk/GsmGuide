import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmSmsComponent } from './gsm-sms.component';

describe('GsmSmsComponent', () => {
  let component: GsmSmsComponent;
  let fixture: ComponentFixture<GsmSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
