import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegulamentoPage } from './regulamento.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RegulamentoPageRoutingModule } from './regulamento-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RegulamentoPageRoutingModule
  ],
  declarations: [RegulamentoPage]
})
export class RegulamentoPageModule {}
