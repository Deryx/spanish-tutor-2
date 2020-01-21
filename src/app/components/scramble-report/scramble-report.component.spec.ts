import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrambleReportComponent } from './scramble-report.component';

describe('ScrambleReportComponent', () => {
  let component: ScrambleReportComponent;
  let fixture: ComponentFixture<ScrambleReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrambleReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrambleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
