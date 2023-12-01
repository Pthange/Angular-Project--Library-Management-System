import { TestBed } from '@angular/core/testing';

import { AdminHttpServiceService } from './admin-http-service.service';

describe('AdminHttpServiceService', () => {
  let service: AdminHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
