import { TestBed } from '@angular/core/testing';

import { GunConverterService } from './gun-converter.service';

describe('GunConverterService', () => {
  let service: GunConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GunConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
