import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuService } from './menu.service';
import { MenuComponent } from './menu/menu.component';

const appRoute: Routes =[
  { path : '', redirectTo: '/customer', pathMatch: 'full'},
  { path : 'customer', component: CustomerLoginComponent},
  { path : 'admin', component: AdminLoginComponent},
  { path : 'register', component: NewRegisterComponent},
  { path : 'menu', component:MenuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    AdminLoginComponent,
    HeaderComponent,
    NewRegisterComponent,
    LoginPageComponent,
    MenuHeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
