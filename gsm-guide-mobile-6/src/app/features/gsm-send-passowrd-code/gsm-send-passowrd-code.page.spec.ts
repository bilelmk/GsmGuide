import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmSendPassowrdCodePage } from './gsm-send-passowrd-code.page';

describe('GsmSendPassowrdCodePage', () => {
  let component: GsmSendPassowrdCodePage;
  let fixture: ComponentFixture<GsmSendPassowrdCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmSendPassowrdCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmSendPassowrdCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
