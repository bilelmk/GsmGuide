import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmArticleModalComponent } from './gsm-article-modal.component';

describe('GsmArticleModalComponent', () => {
  let component: GsmArticleModalComponent;
  let fixture: ComponentFixture<GsmArticleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsmArticleModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmArticleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
