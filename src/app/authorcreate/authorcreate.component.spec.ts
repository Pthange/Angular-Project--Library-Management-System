import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorcreateComponent } from './authorcreate.component';

describe('AuthorcreateComponent', () => {
  let component: AuthorcreateComponent;
  let fixture: ComponentFixture<AuthorcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorcreateComponent]
    });
    fixture = TestBed.createComponent(AuthorcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
