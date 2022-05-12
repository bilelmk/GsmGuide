import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmPriceAddComponent } from './gsm-price-add.component';

describe('GsmPriceAddComponent', () => {
  let component: GsmPriceAddComponent;
  let fixture: ComponentFixture<GsmPriceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmPriceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmPriceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
