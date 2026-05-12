import { Component, OnInit } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { course } from '../../interfaces/course';
import { CourseService } from '../../services/courses/course';

@Component({
  selector: 'app-courseslist',
  imports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './courseslist.html',
  styleUrl: './courseslist.scss',
})


export class Courseslist implements OnInit {

  courses: course[] = [];
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private courseService: CourseService ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => this.courses = data,
      error: () => this.errorMessage = 'Error al caragar cursos'
    });
  }
}
