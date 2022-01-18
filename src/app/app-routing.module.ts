import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RegisterComponent } from './pages/register/register.component';
// import { AuthGuardService } from './Service/auth-guard.service';

const routes: Routes = [
  {path:"", component:LoginComponent, },
  {path:"home", component:HomeComponent,},
  {path:"checkout", component:CartComponent},
  {path:"product-detail", component:ProductDetailComponent},
  {path:"product-list", component:ProductListComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
