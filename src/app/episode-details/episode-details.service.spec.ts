import { TestBed } from '@angular/core/testing';

import { EpisodeDetailsService } from './episode-details.service';

describe('EpisodeDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodeDetailsService = TestBed.get(EpisodeDetailsService);
    expect(service).toBeTruthy();
  });
});
