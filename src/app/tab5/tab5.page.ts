import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buttons: any[]=[
    {id:1,placeholder:'Inicia Sesión',url:''},
    {id:2,placeholder:'Mis compras',url:''},
    {id:3,placeholder:'Direcciones',url:''},
    {id:4,placeholder:'Formas de pago',url:''},
    {id:5,placeholder:'Monedero digital',url:''},
    {id:6,placeholder:'Facturación ',url:''},
    {id:7,placeholder:'Ayuda',url:''},
    {id:8,placeholder:'Te escuchamos',url:''},
    {id:9,placeholder:'Garantía',url:''},
    {id:10,placeholder:'Sostenibilidad',url:''},
    {id:11,placeholder:'Hipoteca verde',url:''},
  ]
}
