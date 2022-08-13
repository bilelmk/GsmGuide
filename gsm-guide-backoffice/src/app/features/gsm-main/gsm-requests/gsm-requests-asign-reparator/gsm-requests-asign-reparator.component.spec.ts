import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmRequestsAsignReparatorComponent } from './gsm-requests-asign-reparator.component';

describe('GsmRequestsAsignReparatorComponent', () => {
  let component: GsmRequestsAsignReparatorComponent;
  let fixture: ComponentFixture<GsmRequestsAsignReparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmRequestsAsignReparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmRequestsAsignReparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
