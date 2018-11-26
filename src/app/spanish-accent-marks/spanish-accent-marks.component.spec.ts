import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishAccentMarksComponent } from './spanish-accent-marks.component';

describe('SpanishAccentMarksComponent', () => {
  let component: SpanishAccentMarksComponent;
  let fixture: ComponentFixture<SpanishAccentMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishAccentMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishAccentMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
