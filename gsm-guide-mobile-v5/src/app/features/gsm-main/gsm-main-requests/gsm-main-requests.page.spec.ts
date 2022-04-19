import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainRequestsPage } from './gsm-main-requests.page';

describe('GsmMainRequestsPage', () => {
  let component: GsmMainRequestsPage;
  let fixture: ComponentFixture<GsmMainRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainRequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
