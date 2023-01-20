import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/modules/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    PageWrapperComponent,
    HeaderComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
