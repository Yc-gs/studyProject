import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';


import { HomeComponent } from './component/home/home.component';
import { WebComponent } from './component/web/web.component';
import { ServiceComponent } from './component/service/service.component';
import { CloudComponent } from './component/cloud/cloud.component';
import { ToolsComponent } from './component/tools/tools.component';
import { PreAngularHistoryComponent } from './component/web/pre-angular/pre-angular-history/pre-angular-history.component';
import { PreAngularBaseComponent } from './component/web/pre-angular/pre-angular-base/pre-angular-base.component';
import { DemoAngularPreComponent } from './component/web/demo-angular/demo-angular-pre/demo-angular-pre.component';
import { DemoAngulaGoComponent } from './component/web/demo-angular/demo-angula-go/demo-angula-go.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebComponent,
    ServiceComponent,
    CloudComponent,
    ToolsComponent,
    PreAngularHistoryComponent,
    PreAngularBaseComponent,
    DemoAngularPreComponent,
    DemoAngulaGoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
