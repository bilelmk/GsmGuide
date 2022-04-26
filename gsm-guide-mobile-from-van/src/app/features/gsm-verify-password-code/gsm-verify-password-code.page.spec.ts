import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmVerifyPasswordCodePage } from './gsm-verify-password-code.page';

describe('GsmVerifyPasswordCodePage', () => {
  let component: GsmVerifyPasswordCodePage;
  let fixture: ComponentFixture<GsmVerifyPasswordCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmVerifyPasswordCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmVerifyPasswordCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
