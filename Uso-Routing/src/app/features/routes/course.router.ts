import { Routes } from "@angular/router";
import { Coursesdetails } from "../pages/coursesdetails/coursesdetails";
import { Courseslist } from "../pages/courseslist/courseslist";


export const course_routes: Routes = [
  {path: ':id', component: Coursesdetails },
  {path: '**', component: Courseslist},
];
