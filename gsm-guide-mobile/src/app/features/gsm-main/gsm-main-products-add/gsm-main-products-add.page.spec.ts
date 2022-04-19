import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainProductsAddPage } from './gsm-main-products-add.page';

describe('GsmMainProductsAddPage', () => {
  let component: GsmMainProductsAddPage;
  let fixture: ComponentFixture<GsmMainProductsAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainProductsAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainProductsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
