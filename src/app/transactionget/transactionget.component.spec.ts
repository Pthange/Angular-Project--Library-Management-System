import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactiongetComponent } from './transactionget.component';

describe('TransactiongetComponent', () => {
  let component: TransactiongetComponent;
  let fixture: ComponentFixture<TransactiongetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactiongetComponent]
    });
    fixture = TestBed.createComponent(TransactiongetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
