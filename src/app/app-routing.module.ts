import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { UserlistComponent } from './component/user/userlist/userlist.component';
import { VipComponent } from './component/user/vip/vip.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'userlist',
        component: UserlistComponent
      },
      {
        path: 'vip',
        component: VipComponent
      },
      {
        path: '**',
        redirectTo: 'userlist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
