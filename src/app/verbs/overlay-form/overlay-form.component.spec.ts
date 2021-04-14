import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbOverlayFormComponent } from './overlay-form.component';

describe('VerbOverlayFormComponent', () => {
  let component: VerbOverlayFormComponent;
  let fixture: ComponentFixture<VerbOverlayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbOverlayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbOverlayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
