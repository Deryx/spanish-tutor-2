import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugatorReportComponent } from './conjugator-report.component';

describe('ConjugatorReportComponent', () => {
  let component: ConjugatorReportComponent;
  let fixture: ComponentFixture<ConjugatorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjugatorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugatorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
