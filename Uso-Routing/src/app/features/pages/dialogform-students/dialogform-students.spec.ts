import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogformStudents } from './dialogform-students';

describe('DialogformStudents', () => {
  let component: DialogformStudents;
  let fixture: ComponentFixture<DialogformStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogformStudents],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogformStudents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
