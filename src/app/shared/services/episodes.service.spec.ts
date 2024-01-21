import { TestBed } from '@angular/core/testing';

import { EpisodesService } from './episodes.service';
import { HttpClientModule } from '@angular/common/http';

describe('EpisodesService', () => {
  let service: EpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
