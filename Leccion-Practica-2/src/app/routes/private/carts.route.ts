import { Routes } from "@angular/router";
import { CartComponent } from "../../features/pages/privated/carts/cart-component/cart-component";
import { CartdetailComponent } from "../../features/pages/privated/carts/cartdetail-component/cartdetail-component";

export const booksRoute: Routes = [
    {path: '', component: CartComponent},
    {path: ':id', component: CartdetailComponent}
];
