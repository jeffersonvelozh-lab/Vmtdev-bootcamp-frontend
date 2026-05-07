import { Routes } from '@angular/router';
import { FlightComponent } from './flight-component/flight-component';
import { PassengerComponent } from './passenger-component/passenger-component';

export const routes: Routes = [
  {path: 'flights', component: FlightComponent},
  {path: 'passengers', component: PassengerComponent}
];
