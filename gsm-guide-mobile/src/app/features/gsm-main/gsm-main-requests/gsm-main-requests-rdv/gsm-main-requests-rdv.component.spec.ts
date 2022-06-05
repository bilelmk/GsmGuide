import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainRequestsRdvComponent } from './gsm-main-requests-rdv.component';

describe('GsmMainRequestsRdvComponent', () => {
  let component: GsmMainRequestsRdvComponent;
  let fixture: ComponentFixture<GsmMainRequestsRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainRequestsRdvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainRequestsRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
