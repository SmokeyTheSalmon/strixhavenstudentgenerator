import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGeneratorComponent } from './student-generator.component';

describe('StudentGeneratorComponent', () => {
  let component: StudentGeneratorComponent;
  let fixture: ComponentFixture<StudentGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
