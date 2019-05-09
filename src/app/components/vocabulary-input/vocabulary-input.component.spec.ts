import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyInputComponent } from './vocabulary-input.component';

describe('VocabularyInputComponent', () => {
  let component: VocabularyInputComponent;
  let fixture: ComponentFixture<VocabularyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
