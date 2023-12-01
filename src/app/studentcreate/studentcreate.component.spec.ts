import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcreateComponent } from './studentcreate.component';

describe('StudentcreateComponent', () => {
  let component: StudentcreateComponent;
  let fixture: ComponentFixture<StudentcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentcreateComponent]
    });
    fixture = TestBed.createComponent(StudentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
