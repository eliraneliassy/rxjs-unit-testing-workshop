import { TestBed } from '@angular/core/testing';

import { GoogleBooksService } from './google-books.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoogleBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GoogleBooksService = TestBed.get(GoogleBooksService);
    expect(service).toBeTruthy();
  });
});
