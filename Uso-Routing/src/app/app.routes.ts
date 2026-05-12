import { Routes } from '@angular/router';
import { Studentslist } from './features/pages/studentslist/studentslist';
import { Courseslist } from './features/pages/courseslist/courseslist';

export const routes: Routes = [
  { path: 'students', component: Studentslist },

  {path: 'courses', component: Courseslist},

  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: '**', component: Studentslist}
];
