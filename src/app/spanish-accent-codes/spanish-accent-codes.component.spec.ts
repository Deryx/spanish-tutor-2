import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishAccentCodesComponent } from './spanish-accent-codes.component';

describe('SpanishAccentCodesComponent', () => {
  let component: SpanishAccentCodesComponent;
  let fixture: ComponentFixture<SpanishAccentCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishAccentCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishAccentCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
