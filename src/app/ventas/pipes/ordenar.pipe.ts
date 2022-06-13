import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], orden: string = ''): Heroe[] {
    const ordenes = {
      nombre: heroes.sort((x, y) => x.nombre.localeCompare(y.nombre)),
      color: heroes.sort((x, y) => x.nombre.localeCompare(y.nombre)),
      vuelo: heroes.sort((x, y) => x.nombre.localeCompare(y.nombre)),
    };
    return ordenes[orden];
  }
}
