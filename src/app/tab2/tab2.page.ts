import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  
  categorys: any[]=[
    {id:1, name:'Mujer'},
    {id:2, name:'Hombre'},
    {id:3, name:'Niños y Niñas'},
    {id:4, name:'Bebés 0-24 Meses'},
    {id:5, name:'Electrónica'},
    {id:6, name:'Línea Blanca y Electrodomésticos'},
    {id:7, name:'Muebles'},
    {id:8, name:'Deportes'},
    {id:9, name:'Belleza'},
    {id:10, name:'Hogar'},
    {id:11, name:'Juguetes'},
    {id:12, name:'Videojuegos'},
    {id:13, name:'Vinos y Gourmet'},
    {id:14, name:'Zapatos'},
    {id:15, name:'Relojes, Lentes y joyeria'},
    {id:16, name:'Otras Categorías'},
    {id:17, name:'Viajes'}
  ]
}
