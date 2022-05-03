import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CustomizeComponent } from './pages/customize/customize.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'cart',component:CartComponent },
  {path:'login',component:LoginComponent },
  {path:'dashboard',component:DashboardComponent },
  {path:'products',component:ProductosComponent },
  {path:'customize',component:CustomizeComponent },
  {path:'product',component:ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
