import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmMainProductsAddComponent } from './gsm-main-products-add.component';

describe('GsmMainProductsAddComponent', () => {
  let component: GsmMainProductsAddComponent;
  let fixture: ComponentFixture<GsmMainProductsAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmMainProductsAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmMainProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
