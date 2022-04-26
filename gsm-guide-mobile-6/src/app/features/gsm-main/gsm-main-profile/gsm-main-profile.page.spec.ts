import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainProfilePage } from './gsm-main-profile.page';

describe('GsmMainProfilePage', () => {
  let component: GsmMainProfilePage;
  let fixture: ComponentFixture<GsmMainProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
