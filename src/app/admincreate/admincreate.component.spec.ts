import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateComponent } from './admincreate.component';

describe('AdmincreateComponent', () => {
  let component: AdmincreateComponent;
  let fixture: ComponentFixture<AdmincreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincreateComponent]
    });
    fixture = TestBed.createComponent(AdmincreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
