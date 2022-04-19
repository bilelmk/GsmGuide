import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmLoginPage } from './gsm-login.page';

describe('GsmLoginPage', () => {
  let component: GsmLoginPage;
  let fixture: ComponentFixture<GsmLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
