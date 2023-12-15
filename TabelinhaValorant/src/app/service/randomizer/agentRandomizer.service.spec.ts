import { TestBed } from '@angular/core/testing';

import { agentRandomizerService } from './agentRandomizer.service';

describe('RandomizerService', () => {
  let service: agentRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(agentRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
