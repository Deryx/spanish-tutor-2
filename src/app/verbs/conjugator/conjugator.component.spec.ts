import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugatorComponent } from '../conjugator.component';

describe('ConjugatorComponent', () => {
  let component: ConjugatorComponent;
  let fixture: ComponentFixture<ConjugatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjugatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
