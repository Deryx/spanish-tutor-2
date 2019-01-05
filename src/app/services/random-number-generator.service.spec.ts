import { TestBed, inject } from '@angular/core/testing';

import { RandomNumberGeneratorService } from './random-number-generator.service';

describe('RandomNumberGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomNumberGeneratorService]
    });
  });

  it('should be created', inject([RandomNumberGeneratorService], (service: RandomNumberGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
