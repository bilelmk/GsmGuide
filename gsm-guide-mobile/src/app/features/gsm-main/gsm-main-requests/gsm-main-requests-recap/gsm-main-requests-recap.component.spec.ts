import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainRequestsRecapComponent } from './gsm-main-requests-recap.component';

describe('GsmMainRequestsRecapComponent', () => {
  let component: GsmMainRequestsRecapComponent;
  let fixture: ComponentFixture<GsmMainRequestsRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainRequestsRecapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainRequestsRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
