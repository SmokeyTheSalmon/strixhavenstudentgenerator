import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonerGeneratorComponent } from './commoner-generator.component';

describe('CommonerGeneratorComponent', () => {
  let component: CommonerGeneratorComponent;
  let fixture: ComponentFixture<CommonerGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonerGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonerGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
