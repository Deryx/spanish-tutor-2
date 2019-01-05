import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyOverlayFormComponent } from './vocabulary-overlay-form.component';

describe('VocabularyOverlayFormComponent', () => {
  let component: VocabularyOverlayFormComponent;
  let fixture: ComponentFixture<VocabularyOverlayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyOverlayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyOverlayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
