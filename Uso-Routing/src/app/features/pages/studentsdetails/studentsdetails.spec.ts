import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentsdetails } from './studentsdetails';

describe('Studentsdetails', () => {
  let component: Studentsdetails;
  let fixture: ComponentFixture<Studentsdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentsdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Studentsdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
