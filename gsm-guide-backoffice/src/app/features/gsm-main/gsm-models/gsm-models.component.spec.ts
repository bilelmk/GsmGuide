import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmModelsComponent } from './gsm-models.component';

describe('GsmModelsComponent', () => {
  let component: GsmModelsComponent;
  let fixture: ComponentFixture<GsmModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
