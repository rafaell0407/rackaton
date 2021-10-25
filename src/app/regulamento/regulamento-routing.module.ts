import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegulamentoPage } from './regulamento.page';

const routes: Routes = [
  {
    path: '',
    component: RegulamentoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulamentoPageRoutingModule {}
