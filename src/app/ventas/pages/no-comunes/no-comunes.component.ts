import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  clientes:string[] = ["maria", "pedro", "juan", "jose", "johan", "pablo"];

  constructor() { }

  ngOnInit(): void {
  }

}
