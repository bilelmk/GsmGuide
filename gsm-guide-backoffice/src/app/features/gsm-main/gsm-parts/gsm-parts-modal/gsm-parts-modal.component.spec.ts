import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmPartsModalComponent } from './gsm-parts-modal.component';

describe('GsmPartsModalComponent', () => {
  let component: GsmPartsModalComponent;
  let fixture: ComponentFixture<GsmPartsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmPartsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmPartsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
