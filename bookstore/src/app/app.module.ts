import { BookListComponent } from './admin/components/book-list/book-list.component';
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
import { AdminModule } from './admin/admin.module';


const routes=[
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'bookList',component:BookListComponent}
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
    SharedModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
