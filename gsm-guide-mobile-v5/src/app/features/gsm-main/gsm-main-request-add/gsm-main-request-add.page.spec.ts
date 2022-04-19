import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainRequestAddPage } from './gsm-main-request-add.page';

describe('GsmMainRequestAddPage', () => {
  let component: GsmMainRequestAddPage;
  let fixture: ComponentFixture<GsmMainRequestAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainRequestAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainRequestAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
