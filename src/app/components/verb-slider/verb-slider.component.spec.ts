import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbSliderComponent } from './verb-slider.component';

describe('VerbSliderComponent', () => {
  let component: VerbSliderComponent;
  let fixture: ComponentFixture<VerbSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
