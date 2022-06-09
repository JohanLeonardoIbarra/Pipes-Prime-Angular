import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

@NgModule({
  declarations: [
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent,
    OrdenarComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent,
    OrdenarComponent,
  ],
})
export class VentasModule {}
