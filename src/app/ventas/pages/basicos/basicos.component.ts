import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombreLower: string = 'johan';
  nombreUpper: string = 'JOHAN';
  nombreCompleto: string = 'joHan IbaRra';

  fecha: Date = new Date();
}
