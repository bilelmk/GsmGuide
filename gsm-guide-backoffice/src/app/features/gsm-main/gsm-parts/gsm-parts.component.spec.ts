import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmPartsComponent } from './gsm-parts.component';

describe('GsmPartsComponent', () => {
  let component: GsmPartsComponent;
  let fixture: ComponentFixture<GsmPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
