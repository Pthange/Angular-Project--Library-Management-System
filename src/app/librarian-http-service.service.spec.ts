import { TestBed } from '@angular/core/testing';

import { LibrarianHttpServiceService } from './librarian-http-service.service';

describe('LibrarianHttpServiceService', () => {
  let service: LibrarianHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarianHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
