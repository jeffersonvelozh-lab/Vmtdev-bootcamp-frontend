import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { student } from '../../interfaces/Student';
import { StudentService } from '../../services/students/student';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-studentslist',
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressSpinnerModule, RouterLink],
  templateUrl: './studentslist.html',
  styleUrl: './studentslist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Studentslist implements OnInit {

  Student: student[] = [];
  errorMessage: string = '';


  constructor(private studentService: StudentService) {};

  loading: boolean = false;
  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {this.Student = data, this.loading = false},
      error: () => this.errorMessage = 'Error al cargar los estudiantes'
    });
  }


}
