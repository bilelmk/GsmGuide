import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmPriceModalComponent } from './gsm-price-modal.component';

describe('GsmPriceModalComponent', () => {
  let component: GsmPriceModalComponent;
  let fixture: ComponentFixture<GsmPriceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmPriceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmPriceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
