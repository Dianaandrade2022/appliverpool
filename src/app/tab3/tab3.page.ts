import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  adds: any[]=[
    {id:1, url:'../assets/crédito/banner.jpg'},
    {id:2, url:'../assets/crédito/banner2.jpg'},
    {id:3, url:'../assets/crédito/banner3.jpg'},
  ]
  slideOpts={
    initialSlide:0,
    autoplay:true,
    speed:250,
    slidesPerView: 1,
    spacebetween:30,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,   
    },
  };

  cards: any[]=[
    {id:1, 
    desc:'Departamental',
    feature1:'10% de descuento adicional en tu primer día de compras en tiendas Liverpool y Liverpool.com.mx',
    feature2:'Sin costo por anualidad',
    feature3:'Tarjetas adicionales sin costo',
    url:'../assets/crédito/departamental.png'},
    {id:2, 
    desc:'Visa',
    feature1:'Aceptada en miles de establecimientos',
    feature2:'Programa de Puntos Rosas',
    feature3:'Anualidad gratis durante el primer año',
    url:'../assets/crédito/visa.png'},
    {id:3, 
    desc:'Universitaria',
    feature1:'Dirigido a Universitarios de 18 a 23 años',
    feature2:'10% de descuento adicional en tu primer día de compras en tiendas Liverpool y Liverpool.com.mx',
    feature3:'Sin costo por anualidad',
    url:'../assets/crédito/universitaria.png'},
  ]
}
