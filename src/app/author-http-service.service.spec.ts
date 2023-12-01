import { TestBed } from '@angular/core/testing';

import { AuthorHttpServiceService } from './author-http-service.service';

describe('AuthorHttpServiceService', () => {
  let service: AuthorHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
