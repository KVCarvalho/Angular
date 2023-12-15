import { TestBed } from '@angular/core/testing';

import { GunRandomizerService } from './gun-randomizer.service';

describe('GunRandomizerService', () => {
  let service: GunRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GunRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
