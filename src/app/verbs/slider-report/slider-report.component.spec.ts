import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderReportComponent } from '../slider-report/slider-report.component';

describe('SliderReportComponent', () => {
  let component: SliderReportComponent;
  let fixture: ComponentFixture<SliderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
