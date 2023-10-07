import { ProductdetailsComponent } from 'src/app/Components/productdetails/productdetails.component';
import { NotfoundComponent } from 'src/app/Components/notfound/notfound.component';
import { authGuard } from 'src/app/Guards/auth.guard';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { RegisterComponent } from 'src/app/Components/register/register.component';
import { CategoriesComponent } from 'src/app/Components/categories/categories.component';
import { BrandsComponent } from 'src/app/Components/brands/brands.component';
import { ProductsComponent } from 'src/app/Components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'products', canActivate: [authGuard], component: ProductsComponent },
  { path: 'brands', canActivate: [authGuard], component: BrandsComponent },
  {
    path: 'categories',
    canActivate: [authGuard],
    component: CategoriesComponent,
  },
  {
    path: 'productdetails/:id',
    canActivate: [authGuard],
    component: ProductdetailsComponent,
  },
  {
    path: 'cart',
    canActivate: [authGuard],
    component: CartComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
