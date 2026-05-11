import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courseslist } from './courseslist';

describe('Courseslist', () => {
  let component: Courseslist;
  let fixture: ComponentFixture<Courseslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courseslist],
    }).compileComponents();

    fixture = TestBed.createComponent(Courseslist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
