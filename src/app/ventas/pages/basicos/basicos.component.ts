import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'johan';
  nombreUpper: string = 'JOHAN';
  nombreCompleto: string = 'joHan IbaRra';

  fecha: Date = new Date();
}
