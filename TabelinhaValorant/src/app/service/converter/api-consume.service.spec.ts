import { TestBed } from '@angular/core/testing';

import { ApiConsumeService } from './api-consume.service';

describe('ApiConsumeService', () => {
  let service: ApiConsumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConsumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
