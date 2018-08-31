import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { WebComponent } from './component/web/web.component';
import { ServiceComponent } from './component/service/service.component';
import { CloudComponent } from './component/cloud/cloud.component';
import { ToolsComponent } from './component/tools/tools.component';

import { PreAngularHistoryComponent } from './component/web/pre-angular/pre-angular-history/pre-angular-history.component';
import { PreAngularBaseComponent } from './component/web/pre-angular/pre-angular-base/pre-angular-base.component';
import { DemoAngularPreComponent } from './component/web/demo-angular/demo-angular-pre/demo-angular-pre.component';
import { DemoAngulaGoComponent } from './component/web/demo-angular/demo-angula-go/demo-angula-go.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'web',
    component: WebComponent,
    children: [
      {
        path: 'history',
        component: PreAngularHistoryComponent
      },
      {
        path: 'base',
        component: PreAngularBaseComponent
      },
      {
        path: 'pre',
        component: DemoAngularPreComponent
      },
      {
        path: 'go',
        component: DemoAngulaGoComponent
      },
      {
        path: '**',
        redirectTo: 'history',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'cloud',
    component: CloudComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
