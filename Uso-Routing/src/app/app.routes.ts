import { Routes } from '@angular/router';
import { Studentslist } from './features/pages/studentslist/studentslist';
import { Courseslist } from './features/pages/courseslist/courseslist';
import { Studentsdetails } from './features/pages/studentsdetails/studentsdetails';
import { Coursesdetails } from './features/pages/coursesdetails/coursesdetails';

export const routes: Routes = [
  { path: 'students', component: Studentslist,
    children:[
      {path: 'id', component: Studentsdetails},
      {path: '**', component: Studentslist}
    ]
  },

  {path: 'courses', component: Courseslist,
    children:[
      {path: 'id', component: Coursesdetails},
      {path: '**', component: Courseslist}
    ]
  },

  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: '**', component: Studentslist}
];
