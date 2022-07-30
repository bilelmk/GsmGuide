import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainRequestsDetailsComponent } from './gsm-main-requests-details.component';

describe('GsmMainRequestsDetailsComponent', () => {
  let component: GsmMainRequestsDetailsComponent;
  let fixture: ComponentFixture<GsmMainRequestsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainRequestsDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainRequestsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
