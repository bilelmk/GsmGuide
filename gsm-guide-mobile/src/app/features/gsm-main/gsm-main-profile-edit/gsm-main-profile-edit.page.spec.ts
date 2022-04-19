import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainProfileEditPage } from './gsm-main-profile-edit.page';

describe('GsmMainProfileEditPage', () => {
  let component: GsmMainProfileEditPage;
  let fixture: ComponentFixture<GsmMainProfileEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainProfileEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainProfileEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
