import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', loadChildren: () =>
    import('./routes/home.route').then(m => m.homeRoute)
  },

  {path: 'products', loadChildren: () =>
    import('./routes/product.route').then(m => m.productRoute)
  },

  {path: 'about', loadChildren: () =>
    import('./routes/about.route').then(m => m.aboutRoute)
  }

];
