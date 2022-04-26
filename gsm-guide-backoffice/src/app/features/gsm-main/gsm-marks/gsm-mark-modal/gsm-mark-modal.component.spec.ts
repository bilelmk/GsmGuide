import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmMarkModalComponent } from './gsm-mark-modal.component';

describe('GsmMarkModalComponent', () => {
  let component: GsmMarkModalComponent;
  let fixture: ComponentFixture<GsmMarkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmMarkModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmMarkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
