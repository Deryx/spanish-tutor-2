import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyCompletionComponent } from './vocabulary-completion.component';

describe('VocabularyCompletionComponent', () => {
  let component: VocabularyCompletionComponent;
  let fixture: ComponentFixture<VocabularyCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
