import { Component, OnInit } from '@angular/core';
import { DepartmentsServices } from '../services/departments';
import { Departments } from '../IDeparment';


@Component({
  selector: 'app-deparments-component',
  imports: [],
  templateUrl: './deparments-component.html',
  styleUrl: './deparments-component.scss',
})
export class DeparmentsComponent implements OnInit {

  departments: Departments[] = [];
  errorMessage: string = '';
   loading = false;

  constructor(private departmentService: DepartmentsServices) {}

  ngOnInit(): void {
    this.departmentService.getAll().subscribe({
      next: (data) => this.departments = data,
      error: () => this.errorMessage = 'Error al cargar departamentos'
    });
  }
}
