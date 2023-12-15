import { TestBed } from '@angular/core/testing';

import { CoreRandomizerService } from './core-randomizer.service';

describe('CoreRandomizerService', () => {
  let service: CoreRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
