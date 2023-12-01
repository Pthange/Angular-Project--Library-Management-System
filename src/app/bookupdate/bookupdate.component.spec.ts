import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookupdateComponent } from './bookupdate.component';

describe('BookupdateComponent', () => {
  let component: BookupdateComponent;
  let fixture: ComponentFixture<BookupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookupdateComponent]
    });
    fixture = TestBed.createComponent(BookupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
