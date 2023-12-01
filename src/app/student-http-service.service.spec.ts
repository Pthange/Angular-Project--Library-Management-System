import { TestBed } from '@angular/core/testing';

import { StudentHttpServiceService } from './student-http-service.service';

describe('StudentHttpServiceService', () => {
  let service: StudentHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
