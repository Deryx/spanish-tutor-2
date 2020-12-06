import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbSliderReportComponent } from './verb-slider-report.component';

describe('VerbSliderReportComponent', () => {
  let component: VerbSliderReportComponent;
  let fixture: ComponentFixture<VerbSliderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbSliderReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbSliderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
