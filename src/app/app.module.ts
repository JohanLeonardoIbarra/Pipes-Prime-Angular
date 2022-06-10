import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Modulos Custom
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
// Cambiar locale de la App
import localeEs from '@angular/common/locales/es-CO';
import localeJp from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common'
registerLocaleData( localeEs );
registerLocaleData( localeJp );
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, VentasModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
