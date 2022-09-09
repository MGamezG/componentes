import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { ResaltadoDirective } from './directives/resaltado/resaltado.directive';
import { NewUserComponent } from './page/users/new-user/new-user.component';
import { NewEditComponent } from './page/users/new-edit/new-edit.component';
import { NewDetailComponent } from './page/users/new-detail/new-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    ResaltadoDirective,
    NewUserComponent,
    NewEditComponent,
    NewDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
