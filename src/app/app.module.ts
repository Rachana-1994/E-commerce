import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { MenuService } from './menu.service';
import { ConfirmEqualValidatorDirective } from './shared/required-validator.directive';
import { MyNavComponent } from './my-nav/my-nav.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { MenuBodyComponent } from './menu-body/menu-body.component';


const appRoute: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerLoginComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'register', component: NewRegisterComponent },
  { path: 'menu', component: MenuBodyComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    AdminLoginComponent,
    HeaderComponent,
    NewRegisterComponent,
    ConfirmEqualValidatorDirective,
    MyNavComponent,
    ProductComponent,
    CartComponent,
    MenuBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
