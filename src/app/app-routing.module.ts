import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {TotpComponent} from './totp/totp.component';
import {OrderComponent} from './order/order.component';
import {TokenComponent} from './register/token.component';
import {ProductListComponent} from './products/list.component';
import {ProductViewComponent} from './products/view.component';
import {ProductAddEditComponent} from './products/add-edit.component';
import {ProductWithOrderViewComponent} from './products/view-with-order';
import {CategoryListComponent} from './categories/list.component';
import {CategoryViewComponent} from './categories/view.component';
import {CategoryAddEditComponent} from './categories/add-edit.component';
import {CategoryWithProductViewComponent} from './categories/view-with-product';
import {CategoryWithProductAndOrderViewComponent} from './categories/view-with-product-and-order.component';
import {OrderListComponent} from './order/list.component';
import {OrderViewComponent} from './order/view.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'totp', component: TotpComponent},
  {path: 'order', component: OrderComponent},
  {path: 'verify', component: TokenComponent},
  {path: 'products', redirectTo: 'products/list', pathMatch: 'full'},
  {path: 'products/list', component: ProductListComponent},
  {path: 'products/:id/view', component: ProductViewComponent},
  {path: 'products/add', component: ProductAddEditComponent},
  {path: 'products/:id/edit', component: ProductAddEditComponent},
  {path: 'products/:id/order', component: ProductWithOrderViewComponent},
  {path: 'categories', redirectTo: 'categories/list', pathMatch: 'full'},
  {path: 'categories/list', component: CategoryListComponent},
  {path: 'categories/:id/view', component: CategoryViewComponent},
  {path: 'categories/add', component: CategoryAddEditComponent},
  {path: 'categories/:id/edit', component: CategoryAddEditComponent},
  {path: 'categories/:id/product', component: CategoryWithProductViewComponent},
  {path: 'categories/:id/product-with-order', component: CategoryWithProductAndOrderViewComponent},
  {path: 'orders', redirectTo: 'orders/list', pathMatch: 'full'},
  {path: 'orders/list', component: OrderListComponent},
  {path: 'orders/:id/view', component: OrderViewComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
