import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmVerifyEmailCodePage } from './gsm-verify-email-code.page';

describe('GsmVerifyEmailCodePage', () => {
  let component: GsmVerifyEmailCodePage;
  let fixture: ComponentFixture<GsmVerifyEmailCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmVerifyEmailCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmVerifyEmailCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
