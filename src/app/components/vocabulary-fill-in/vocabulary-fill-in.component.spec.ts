import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyFillInComponent } from './vocabulary-fill-in.component';

describe('VocabularyFillInComponent', () => {
  let component: VocabularyFillInComponent;
  let fixture: ComponentFixture<VocabularyFillInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabularyFillInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyFillInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
