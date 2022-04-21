import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmAdminsComponent } from './gsm-admins.component';

describe('GsmAdminsComponent', () => {
  let component: GsmAdminsComponent;
  let fixture: ComponentFixture<GsmAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
