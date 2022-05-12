import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmLocationComponent } from './gsm-location.component';

describe('GsmLocationComponent', () => {
  let component: GsmLocationComponent;
  let fixture: ComponentFixture<GsmLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
