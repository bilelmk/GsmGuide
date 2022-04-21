import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmCategoriesModalComponent } from './gsm-categories-modal.component';

describe('GsmCategoriesModalComponent', () => {
  let component: GsmCategoriesModalComponent;
  let fixture: ComponentFixture<GsmCategoriesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmCategoriesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmCategoriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
