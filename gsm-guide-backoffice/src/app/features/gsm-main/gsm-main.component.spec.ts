import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmMainComponent } from './gsm-main.component';

describe('GsmMainComponent', () => {
  let component: GsmMainComponent;
  let fixture: ComponentFixture<GsmMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
