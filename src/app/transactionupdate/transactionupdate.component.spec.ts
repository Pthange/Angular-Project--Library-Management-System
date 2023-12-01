import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionupdateComponent } from './transactionupdate.component';

describe('TransactionupdateComponent', () => {
  let component: TransactionupdateComponent;
  let fixture: ComponentFixture<TransactionupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionupdateComponent]
    });
    fixture = TestBed.createComponent(TransactionupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
