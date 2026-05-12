import { Routes } from '@angular/router';
import { Studentslist } from './features/pages/studentslist/studentslist';
import { Courseslist } from './features/pages/courseslist/courseslist';

export const routes: Routes = [
  { path: 'students', component: Studentslist },

  {path: '', redirectTo: 'students', pathMatch: 'full'},

  {path: 'students/id',
    loadChildren: () => import('./features/routes/student.router')
    .then(m => m.student_routes),
  },

  {path: 'courses', component: Courseslist},

  {path: 'courses/id',
    loadChildren: () => import('./features/routes/course.router')
    .then(m => m.course_routes),
  },

  {path: '**', component: Studentslist}
];
