import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmShortcutsModalComponent } from './gsm-shortcuts-modal.component';

describe('GsmShortcutsModalComponent', () => {
  let component: GsmShortcutsModalComponent;
  let fixture: ComponentFixture<GsmShortcutsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmShortcutsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmShortcutsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
