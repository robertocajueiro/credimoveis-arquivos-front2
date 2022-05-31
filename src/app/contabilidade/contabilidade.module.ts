import { ContabilidadeComponent } from './contabilidade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [
    ContabilidadeComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ContabilidadeModule { }
