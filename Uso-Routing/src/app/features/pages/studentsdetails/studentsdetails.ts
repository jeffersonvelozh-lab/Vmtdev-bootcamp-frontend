import { Component, OnInit } from '@angular/core';
import { student } from '../../interfaces/Student';
import { StudentService } from '../../services/students/student';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-studentsdetails',
  imports: [MatCardModule, MatProgressSpinner],
  templateUrl: './studentsdetails.html',
  styleUrl: './studentsdetails.scss',
})
export class Studentsdetails implements OnInit {
  student?: student;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private studentService: StudentService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.studentService.getById(id).subscribe({
        next: (data) => this.student = data,
        error: () => this.errorMessage = 'Error al cargar el empleado'
      });
    }
  }

}
