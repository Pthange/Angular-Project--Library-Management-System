import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariangetComponent } from './librarianget.component';

describe('LibrariangetComponent', () => {
  let component: LibrariangetComponent;
  let fixture: ComponentFixture<LibrariangetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrariangetComponent]
    });
    fixture = TestBed.createComponent(LibrariangetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
