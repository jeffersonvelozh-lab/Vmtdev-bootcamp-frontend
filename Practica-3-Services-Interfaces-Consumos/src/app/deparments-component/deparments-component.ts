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

  agregarDepartments() {
        const payload : Partial<Departments> = {
          name: 'Engineering',
          description: 'Area de dasarrollo',
          managerName: 'EL Rey Arturo',
        };

        this.departmentService.crearDepartment(payload).subscribe({
          next: (nuevo) => {
            this.departments = [...this.departments, nuevo];
          },
          error: () => {
            this.errorMessage = 'Error al crear el departamento';
          }
        });
      }

      editarDepartment(){
        const departamento = this.departments[0];
        if (!departamento) return;

        const payload : Partial<Departments> = {
          name: 'Departamento editado 2345',
          description: 'Area de dasarrollo',
          managerName: 'EL Rey Arturo',
        };

        this.departmentService.actualizacionDepartment(departamento.id, payload).subscribe({
          next: (actualizado) => {
            this.departments = this.departments.map(e => e.id == departamento.id ? actualizado : e);
          },
          error: () => {
            this.errorMessage = 'Error al editar el departamento';
          }
        });
      }

  eliminarDepartment(id: string) {
    this.departmentService.eliminarDepartment(id).subscribe({
      next: () => {
        this.departments = this.departments.filter(e=> e.id !== id);
      },
      error: () => {
        this.errorMessage = 'Error al eliminar el departamento';
      }
    });
  }

}
