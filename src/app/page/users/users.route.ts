import { NewDetailComponent } from './new-detail/new-detail.component';
import { NewEditComponent } from './new-edit/new-edit.component';
import { NewUserComponent } from './new-user/new-user.component';

import { Routes } from '@angular/router';

export const userRouts: Routes = [

      {
        path:'new',
        component:NewUserComponent
      },
      {
        path:'edit',
        component:NewEditComponent
      },
      {
        path:'detail',
        component:NewDetailComponent
      }
];

