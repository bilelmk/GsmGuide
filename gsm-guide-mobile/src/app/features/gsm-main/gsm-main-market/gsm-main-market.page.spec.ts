import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainMarketPage } from './gsm-main-market.page';

describe('GsmMainMarketPage', () => {
  let component: GsmMainMarketPage;
  let fixture: ComponentFixture<GsmMainMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainMarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
