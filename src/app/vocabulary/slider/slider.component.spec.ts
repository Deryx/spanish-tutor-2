import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularySliderComponent } from './slider.component';

describe('VocabularySliderComponent', () => {
  let component: VocabularySliderComponent;
  let fixture: ComponentFixture<VocabularySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
