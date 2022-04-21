import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmRequestsModalComponent } from './gsm-requests-modal.component';

describe('GsmRequestsModalComponent', () => {
  let component: GsmRequestsModalComponent;
  let fixture: ComponentFixture<GsmRequestsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmRequestsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmRequestsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
