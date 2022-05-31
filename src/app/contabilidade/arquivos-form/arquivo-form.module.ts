import { ArquivosFormComponent } from './arquivos-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';



@NgModule({
  declarations: [
    ArquivosFormComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ArquivoFormModule { }
