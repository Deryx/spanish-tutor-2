import { TestBed, inject } from '@angular/core/testing';

import { VocabularyCategoriesService } from './vocabulary-categories.service';

describe('VocabularyCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VocabularyCategoriesService]
    });
  });

  it('should be created', inject([VocabularyCategoriesService], (service: VocabularyCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
