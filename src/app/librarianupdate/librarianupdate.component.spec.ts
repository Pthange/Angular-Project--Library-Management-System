import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianupdateComponent } from './librarianupdate.component';

describe('LibrarianupdateComponent', () => {
  let component: LibrarianupdateComponent;
  let fixture: ComponentFixture<LibrarianupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrarianupdateComponent]
    });
    fixture = TestBed.createComponent(LibrarianupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
