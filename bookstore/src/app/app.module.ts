import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './home/components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SharedModule } from './shared/shared.module';


const routes=[
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
