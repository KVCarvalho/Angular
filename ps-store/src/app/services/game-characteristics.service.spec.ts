import { TestBed } from '@angular/core/testing';

import { GameCharacteristicsService } from './game-characteristics.service';

describe('GameCharacteristicsService', () => {
  let service: GameCharacteristicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCharacteristicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
