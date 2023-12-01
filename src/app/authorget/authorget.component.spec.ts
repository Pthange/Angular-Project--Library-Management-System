import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorgetComponent } from './authorget.component';

describe('AuthorgetComponent', () => {
  let component: AuthorgetComponent;
  let fixture: ComponentFixture<AuthorgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorgetComponent]
    });
    fixture = TestBed.createComponent(AuthorgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
