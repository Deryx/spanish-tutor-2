import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInComponent } from './fill-in.component';

describe('VocabularyFillInComponent', () => {
  let component: FillInComponent;
  let fixture: ComponentFixture<FillInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
