import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstemplateStudents } from './formstemplate-students';

describe('FormstemplateStudents', () => {
  let component: FormstemplateStudents;
  let fixture: ComponentFixture<FormstemplateStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormstemplateStudents],
    }).compileComponents();

    fixture = TestBed.createComponent(FormstemplateStudents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
