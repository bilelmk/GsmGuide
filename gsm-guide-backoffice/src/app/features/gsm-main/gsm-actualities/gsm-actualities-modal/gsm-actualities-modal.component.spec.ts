import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmActualitiesModalComponent } from './gsm-actualities-modal.component';

describe('GsmActualitiesModalComponent', () => {
  let component: GsmActualitiesModalComponent;
  let fixture: ComponentFixture<GsmActualitiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmActualitiesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmActualitiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
