import { Studentsdetails } from "../pages/studentsdetails/studentsdetails";
import { Studentslist } from "../pages/studentslist/studentslist";
import { Routes } from "@angular/router";


export const student_routes: Routes = [
  {path: ':id', component: Studentsdetails},
  {path: '**', component: Studentslist}
];
