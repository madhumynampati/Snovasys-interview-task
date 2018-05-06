import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditAssetsComponent } from './add-edit-assets/add-edit-assets.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { ListAssetsComponent } from './list-assets/list-assets.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddEditAssetsComponent,
    ViewAssetComponent,
    ListAssetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'login',
        pathMatch: 'full'
      },{
        path:'login',
        component:LoginComponent
      },{
        path:'dashboard',
        component:DashboardComponent
      },{
        path:'listAssets',
        component:ListAssetsComponent
      },{
        path:'viewAsset/:id',
        component:ViewAssetComponent
      },{
        path:'addEditAsset/:id',
        component:AddEditAssetsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
