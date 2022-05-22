import { ArquivosListComponent } from './contabilidade/arquivos-list/arquivos-list.component';
import { ArquivosFormComponent } from './contabilidade/arquivos-form/arquivos-form.component';
import { RhComponent } from './rh/rh.component';
import { CobrancaComponent } from './cobranca/cobranca.component';
import { ContabilidadeComponent } from './contabilidade/contabilidade.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceiroComponent } from './financeiro/financeiro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contabilidade',
    component: ContabilidadeComponent
  },
     //sub-menu da contabilidade
  {
    path: 'contabilidade/arquivos-form',
    component: ArquivosFormComponent
  },
  {
    path: 'contabilidade/arquivos-list',
    component: ArquivosListComponent
  },
  {
    path: 'financeiro',
    component: FinanceiroComponent
  },

  {
    path: 'cobranca',
    component: CobrancaComponent
  },
  {
    path: 'rh',
    component: RhComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
