import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { publicGuard } from './core/guards/public.guard';

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
  },

  {path: 'contact', loadChildren: () =>
    import('./routes/contact.route').then(m => m.contactRoute)
  },

  {path: 'login', canActivate: [publicGuard], loadChildren: () =>
    import('./routes/login.route').then(m => m.loginRoute)
  },

  { path: 'admin',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./core/layouts/privated/adminlayouts-component/adminlayouts-component').then((m) => m.AdminlayoutsComponent),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                  import('./features/pages/privated/dashboard-component/dashboard-component').then((m) => m.DashboardComponent),
            },
            {
                path: 'products',
                loadComponent: () =>
                  import('./features/pages/privated/Product-component/productlist-component/productlist-component').then((m) => m.ProductlistComponent),
            },
            {
                path: 'carts',
                loadComponent: () =>
                  import('./features/pages/privated/carts/cart-component/cart-component').then((m) => m.CartComponent),
            },
            {
              path: ':id',
              loadComponent: () =>
                import('./features/pages/privated/carts/cartdetail-component/cartdetail-component').then((m) => m.CartdetailComponent),
            }

        ]
  }

];
