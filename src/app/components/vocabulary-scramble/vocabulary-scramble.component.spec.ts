import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyScrambleComponent } from './vocabulary-scramble.component';

describe('VocabularyScrambleComponent', () => {
  let component: VocabularyScrambleComponent;
  let fixture: ComponentFixture<VocabularyScrambleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyScrambleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyScrambleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
