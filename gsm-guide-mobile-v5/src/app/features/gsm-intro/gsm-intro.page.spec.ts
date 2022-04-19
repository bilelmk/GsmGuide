import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsmIntroPage } from './gsm-intro.page';

describe('GsmIntroPage', () => {
  let component: GsmIntroPage;
  let fixture: ComponentFixture<GsmIntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmIntroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsmIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
