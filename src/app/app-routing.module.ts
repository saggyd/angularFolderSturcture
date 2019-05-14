import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './shared/component/cart/cart.component';

const routes: Routes = [
  
  { 
    path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  { 
    path: 'login', loadChildren: './modules/login/login.module#LoginModule'
  },
  { 
    path: 'cart', component: CartComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
