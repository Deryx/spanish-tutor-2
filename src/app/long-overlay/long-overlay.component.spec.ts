import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongOverlayComponent } from './long-overlay.component';

describe('LongOverlayComponent', () => {
  let component: LongOverlayComponent;
  let fixture: ComponentFixture<LongOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
