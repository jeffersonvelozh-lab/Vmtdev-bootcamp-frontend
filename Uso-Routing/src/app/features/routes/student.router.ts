import { Studentsdetails } from "../pages/studentsdetails/studentsdetails";
import { Studentslist } from "../pages/studentslist/studentslist";
import { Routes } from "@angular/router";


export const routes: Routes = [
  {path: 'studendetails', component: Studentsdetails},
  {path: '**', component: Studentslist}
];
