import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmVerifyPhoneCodePage } from './gsm-verify-phone-code.page';

describe('GsmVerifyPhoneCodePage', () => {
  let component: GsmVerifyPhoneCodePage;
  let fixture: ComponentFixture<GsmVerifyPhoneCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmVerifyPhoneCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmVerifyPhoneCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
