import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmLoginComponent } from './gsm-login.component';

describe('GsmLoginComponent', () => {
  let component: GsmLoginComponent;
  let fixture: ComponentFixture<GsmLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
