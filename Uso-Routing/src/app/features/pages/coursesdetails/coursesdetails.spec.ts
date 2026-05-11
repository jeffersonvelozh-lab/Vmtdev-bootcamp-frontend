import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursesdetails } from './coursesdetails';

describe('Coursesdetails', () => {
  let component: Coursesdetails;
  let fixture: ComponentFixture<Coursesdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coursesdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Coursesdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
