import { TestBed } from '@angular/core/testing';

import { StratRandomizerService } from './strat-randomizer.service';

describe('StratRandomizerService', () => {
  let service: StratRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StratRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
