import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPronunciationComponent } from './letter-pronunciation.component';

describe('LetterPronunciationComponent', () => {
  let component: LetterPronunciationComponent;
  let fixture: ComponentFixture<LetterPronunciationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterPronunciationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterPronunciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
