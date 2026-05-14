import { Component, OnInit, ChangeDetectionStrategy, signal, Signal } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { course } from '../../interfaces/course';
import { CourseService } from '../../services/courses/course';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courseslist',
  imports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule, RouterLink],
  templateUrl: './courseslist.html',
  styleUrl: './courseslist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class Courseslist implements OnInit {

  courses = signal<course[]>([]);
  loading = signal<boolean>(false);
  errorMessage: string = '';

  constructor(private courseService: CourseService ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data: course[]) => this.courses.set(data),
      error: () => this.errorMessage = 'Error al caragar cursos'
    });
  }
}
