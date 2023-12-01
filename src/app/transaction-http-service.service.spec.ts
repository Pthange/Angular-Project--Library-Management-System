import { TestBed } from '@angular/core/testing';

import { TransactionHttpServiceService } from './transaction-http-service.service';

describe('TransactionHttpServiceService', () => {
  let service: TransactionHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
