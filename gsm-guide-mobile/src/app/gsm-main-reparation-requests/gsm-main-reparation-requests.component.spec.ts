import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainReparationRequestsComponent } from './gsm-main-reparation-requests.component';

describe('GsmMainReparationRequestsComponent', () => {
  let component: GsmMainReparationRequestsComponent;
  let fixture: ComponentFixture<GsmMainReparationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainReparationRequestsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainReparationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
