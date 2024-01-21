import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import { HttpClientModule } from '@angular/common/http';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
