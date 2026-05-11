import { Routes } from "@angular/router";
import { Coursesdetails } from "../pages/coursesdetails/coursesdetails";
import { Courseslist } from "../pages/courseslist/courseslist";


export const routes: Routes = [
  {path: 'coursedetail', component:Coursesdetails },
  {path: '**', component: Courseslist},
];
