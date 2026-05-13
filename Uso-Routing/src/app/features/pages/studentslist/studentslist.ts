import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { student } from '../../interfaces/Student';
import { StudentService } from '../../services/students/student';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { enviroment } from '../../../../environments/enviroment';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-studentslist',
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatProgressSpinnerModule, MatIconModule, RouterLink],
  templateUrl: './studentslist.html',
  styleUrl: './studentslist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Studentslist implements OnInit {

  Student: student[] = [];
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (data: student[]) => this.Student = data,
      error: () => this.errorMessage = 'Error al cargar los estudiantes'
    });
  }
}
