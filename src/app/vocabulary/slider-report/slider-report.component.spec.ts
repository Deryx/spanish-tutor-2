import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularySliderReportComponent } from './slider-report.component';

describe('VocabularySliderReportComponent', () => {
  let component: VocabularySliderReportComponent;
  let fixture: ComponentFixture<VocabularySliderReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularySliderReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularySliderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
