import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-hashtag',
            routerLink: 'numeros',
          },
          {
            label: 'Ordenar',
            icon: 'pi pi-sort-amount-down',
            routerLink: 'ordenar',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'nocomunes',
          },
        ],
      },
      {
        label: 'Pipes Custom',
        icon: 'pi pi-cog',
      },
    ];
  }
}
