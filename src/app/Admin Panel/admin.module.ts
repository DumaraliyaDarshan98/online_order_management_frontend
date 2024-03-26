import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'admin-login',
    component : AdminLoginComponent
  },
  {
   path: '',
   component: AdminHomeComponent,
   children : [
    {
      path:'users',
      component : UserListComponent
    },
    {
      path:'items',
      component : ItemListComponent
    },
    {
      path:'add-item',
      component : CreateItemComponent
    },
    {
      path:'edit-item/:id',
      component : EditItemComponent
    },
    {
      path:'orders',
      component : OrderListComponent
    },
    {
      path:'dashboard',
      component : DashboardComponent
    },
    {
      path:'**',
      redirectTo : "dashboard"
    }
   ]
  },
];

@NgModule({
  declarations: [
    AdminHomeComponent,
    UserListComponent,
    ItemListComponent,
    CreateItemComponent,
    EditItemComponent,
    AdminLoginComponent,
    OrderListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
