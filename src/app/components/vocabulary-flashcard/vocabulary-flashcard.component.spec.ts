import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyFlashcardComponent } from './vocabulary-flashcard.component';

describe('VocabularyFlashcardComponent', () => {
  let component: VocabularyFlashcardComponent;
  let fixture: ComponentFixture<VocabularyFlashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyFlashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
