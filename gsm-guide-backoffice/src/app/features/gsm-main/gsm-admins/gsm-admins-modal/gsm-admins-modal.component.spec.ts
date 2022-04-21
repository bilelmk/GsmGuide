import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmAdminsModalComponent } from './gsm-admins-modal.component';

describe('GsmAdminsModalComponent', () => {
  let component: GsmAdminsModalComponent;
  let fixture: ComponentFixture<GsmAdminsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmAdminsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmAdminsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
