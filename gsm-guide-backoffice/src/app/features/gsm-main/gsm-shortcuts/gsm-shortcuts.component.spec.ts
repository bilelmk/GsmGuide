import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmShortcutsComponent } from './gsm-shortcuts.component';

describe('GsmShortcutsComponent', () => {
  let component: GsmShortcutsComponent;
  let fixture: ComponentFixture<GsmShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmShortcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
