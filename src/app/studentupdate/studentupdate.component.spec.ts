import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentupdateComponent } from './studentupdate.component';

describe('StudentupdateComponent', () => {
  let component: StudentupdateComponent;
  let fixture: ComponentFixture<StudentupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentupdateComponent]
    });
    fixture = TestBed.createComponent(StudentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
