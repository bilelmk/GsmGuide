import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainReparationRequestsPage } from './gsm-main-reparation-requests.page';

describe('GsmMainReparationRequestsPage', () => {
  let component: GsmMainReparationRequestsPage;
  let fixture: ComponentFixture<GsmMainReparationRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainReparationRequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainReparationRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
