
import { UsersComponent } from './page/users/users.component';
import { HomeComponent } from './page/home/home.component';
import {userRouts} from './page/users/users.route'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'users/:id',
    component:UsersComponent,
    children:userRouts
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
