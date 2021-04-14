import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbFlashcardComponent } from '../flashcard/flashcard.component';

describe('FlashcardComponent', () => {
  let component: VerbFlashcardComponent;
  let fixture: ComponentFixture<VerbFlashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbFlashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
