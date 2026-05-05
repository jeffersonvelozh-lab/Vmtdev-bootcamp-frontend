import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees-component/employees-component';
import { DeparmentsComponent } from './deparments-component/deparments-component';

export const routes: Routes = [
  {path: 'employees', component: EmployeesComponent },
  {path: 'departments', component: DeparmentsComponent},
  {path:'', redirectTo: 'employees', pathMatch: 'full'}
];
