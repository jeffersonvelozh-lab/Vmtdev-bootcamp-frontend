import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EmployeesServices } from '../services/employees';
import { Employees } from '../IEmployees';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-component',
  imports: [],
  templateUrl: './employees-component.html',
  styleUrl: './employees-component.scss',
})
export class EmployeesComponent implements OnInit {
  private employeesService = inject(EmployeesServices);

  employees: Employees[] = [];
  employee?: Employees;
  loading = false;
  error = '';

  constructor(private employeeService: EmployeesServices,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
       this.employeeService.getById(id).subscribe({
        next: (data) => this.employee = data,
        error: () => this.error = 'Error al cargar el empleado'
      });
    }
    else {
      this.employeesService .getEmployees().subscribe({
      next: (data) => this.employees = data,
      error: () => this.error = 'Error al cargar empleados'
    });
    }
  }
}
