import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from 'src/app/Components/home/home.component';
import { ProductsComponent } from 'src/app/Components/products/products.component';
import { BrandsComponent } from 'src/app/Components/brands/brands.component';
import { CategoriesComponent } from 'src/app/Components/categories/categories.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { RegisterComponent } from 'src/app/Components/register/register.component';
import { CartComponent } from 'src/app/Components/cart/cart.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { MainsliderComponent } from './Components/mainslider/mainslider.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CategorysliderComponent } from './Components/categoryslider/categoryslider.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    FooterComponent,
    NotfoundComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    CategorysliderComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
