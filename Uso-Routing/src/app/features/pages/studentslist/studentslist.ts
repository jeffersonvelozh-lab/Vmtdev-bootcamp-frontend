import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { student } from '../../interfaces/Student';
import { StudentService } from '../../services/students/student';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DialogformStudents } from '../dialogform-students/dialogform-students';
import { FormstemplateStudents } from '../formstemplate-students/formstemplate-students';

@Component({
  selector: 'app-studentslist',
  imports: [MatButtonModule, MatCardModule, MatDividerModule,
    MatProgressSpinnerModule, MatIconModule, RouterLink,
    FormsModule, MatDialogModule],
  templateUrl: './studentslist.html',
  styleUrl: './studentslist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Studentslist implements OnInit {

  students = signal<student[]>([]);
  loading = signal<boolean>(false);

  errorMessage: string = '';

  constructor(
    private studentService: StudentService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {

    this.loading.set(true);

    this.studentService.getStudents().subscribe({

      next: (data: student[]) => {
        this.students.set(data);
        this.loading.set(false);
      },

      error: () => {
        this.errorMessage = 'Error al cargar los estudiantes';
        this.loading.set(false);
      }

    });

  }

  goToStudentDetails(Id: string): void {
    this.router.navigate(['/students', Id]);
  }

  abrirFormulario(student?: student): void {

    const dialogRef = this.dialog.open(FormstemplateStudents, {
      width: '400px',
      data: student
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.cargarEstudiantes();
    });
  }


}
