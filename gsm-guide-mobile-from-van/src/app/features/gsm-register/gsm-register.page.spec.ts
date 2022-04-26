import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmRegisterPage } from './gsm-register.page';

describe('GsmRegisterPage', () => {
  let component: GsmRegisterPage;
  let fixture: ComponentFixture<GsmRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
