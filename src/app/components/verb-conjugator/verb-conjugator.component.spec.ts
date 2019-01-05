import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbConjugatorComponent } from './verb-conjugator.component';

describe('VerbConjugatorComponent', () => {
  let component: VerbConjugatorComponent;
  let fixture: ComponentFixture<VerbConjugatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbConjugatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbConjugatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
