import { SidebarComponent } from './../sidebar/sidebar.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ]
})
export class NavbarModule { }
