import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookModule,
    AuthModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
