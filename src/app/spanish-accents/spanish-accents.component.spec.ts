import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishAccentsComponent } from './spanish-accents.component';

describe('SpanishAccentsComponent', () => {
  let component: SpanishAccentsComponent;
  let fixture: ComponentFixture<SpanishAccentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishAccentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishAccentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
