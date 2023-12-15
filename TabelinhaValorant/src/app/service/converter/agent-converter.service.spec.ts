import { TestBed } from '@angular/core/testing';

import { AgentConverterService } from './agent-converter.service';

describe('AgentConverterService', () => {
  let service: AgentConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
