import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmModelModalComponent } from './gsm-model-modal.component';

describe('GsmModelModalComponent', () => {
  let component: GsmModelModalComponent;
  let fixture: ComponentFixture<GsmModelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmModelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmModelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
