import { TestBed } from '@angular/core/testing';

import { BookHttpServiceService } from './book-http-service.service';

describe('BookHttpServiceService', () => {
  let service: BookHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
