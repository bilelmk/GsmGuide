import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmRequestsComponent } from './gsm-requests.component';

describe('GsmRequestsComponent', () => {
  let component: GsmRequestsComponent;
  let fixture: ComponentFixture<GsmRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
