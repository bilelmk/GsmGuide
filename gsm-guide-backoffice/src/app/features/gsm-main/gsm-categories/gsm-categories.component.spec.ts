import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmCategoriesComponent } from './gsm-categories.component';

describe('GsmCategoriesComponent', () => {
  let component: GsmCategoriesComponent;
  let fixture: ComponentFixture<GsmCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
