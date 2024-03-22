import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MenuListingComponent } from './components/menu-listing/menu-listing.component';
import { ShowOrderComponent } from './components/show-order/show-order.component';

const routes: Routes = [
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "menu",
    component : MenuListingComponent
  },
  {
    path : "order",
    component : ShowOrderComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./Admin Panel/admin.module').then(m => m.AdminModule)
  },
  {
    path: "**",
    redirectTo : "home",
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
