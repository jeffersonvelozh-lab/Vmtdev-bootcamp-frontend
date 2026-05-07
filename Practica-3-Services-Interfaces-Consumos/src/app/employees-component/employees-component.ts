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
  agregarEmployee() {
      const payload : Partial<Employees> = {
        name: 'Jefferson Peréz',
        email: 'perez@mail.com',
        phone: '555-9876',
        position: 'Frontend Developer',
        department: 'Engineering',
        salary: 1200
      };

      this.employeeService.crearEmployee(payload).subscribe({
        next: (nuevo) => {
          this.employees = [...this.employees, nuevo];
        },
        error: () => {
          this.error = 'Error al crear al empleado';
        }
      });
    }

    editarEmployee(){
      const empleado = this.employees[0];
      if (!empleado) return;

      const payload: Partial<Employees> = {
        name: 'Jefferson Peréz Editado',
        email: 'perez.editado@mail.com',
        phone: '555-0001',
        position: 'Tech Lead',
        department: 'Engineering',
        salary: 2000
      };

      this.employeeService.actualizacionEmployee(empleado.id, payload).subscribe({
        next: (actualizado) => {
          this.employees = this.employees.map(e => e.id == empleado.id ? actualizado : e);
        },
        error: () => {
          this.error = 'Error al editar al empleado';
        }
      });
    }

    eliminarEmployee(id: string) {
      this.employeeService.eliminarEmployee(id).subscribe({
        next: () => {
          this.employees = this.employees.filter(e => e.id !== id);
        },
        error: () => {
          this.error = 'Error al eliminar al empleado';
        }
      });
    }
}
