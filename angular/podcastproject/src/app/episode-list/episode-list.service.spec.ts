import { TestBed } from '@angular/core/testing';

import { EpisodeListService } from './episode-list.service';

describe('EpisodeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodeListService = TestBed.get(EpisodeListService);
    expect(service).toBeTruthy();
  });
});
