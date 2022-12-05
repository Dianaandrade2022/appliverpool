import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  pictures: any[]=[
    {id: 1, url:'../assets/home/0.jpeg', description:'Cámara 1', precio:100},
    {id: 2, url:'../assets/home/1.jpg', description:'Cámara 2', precio:100},
    {id: 3, url:'../assets/home/2.jpeg', description:'Cámara 3', precio:100},
    {id: 4, url:'../assets/home/3.jpeg', description:'Cámara', precio:100},
    {id: 5, url:'../assets/home/4.jpeg', description:'Cámara', precio:100},
    {id: 6, url:'../assets/home/5.jpeg', description:'Cámara', precio:100},
    {id: 7, url:'../assets/home/6.jpeg', description:'Cámara', precio:100},
    {id: 8, url:'../assets/home/7.jpeg', description:'Cámara', precio:100},
    {id: 9, url:'../assets/home/8.jpeg', description:'Cámara', precio:100},

  ];
  
   slideOpts = {
    initialSlide:0,
    speed:100,
    slidesPerView: 3,
    spacebetween:0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    },
  };

  adds: any[]=[
    {id:1,title:'',url:''},
    {id:2,title:'',url:''},
    {id:3,title:'',url:''},
    {id:4,title:'',url:''},
    {id:5,title:'',url:''},
    {id:6,title:'',url:''},
    {id:7,title:'',url:''},
    {id:8,title:'',url:''},
    {id:9,title:'',url:''},
  ]
  bags: any[]=[
    {id:1,description:'',url:'',precio1:699, precio2:3499},
    {id:2,description:'',url:'',precio1:699, precio2:3499},
    {id:3,description:'',url:'',precio1:699, precio2:3499},
    {id:4,description:'',url:'',precio1:699, precio2:3499},
    {id:5,description:'',url:'',precio1:699, precio2:3499},
    {id:6,description:'',url:'',precio1:699, precio2:3499},
    {id:7,description:'',url:'',precio1:699, precio2:3499},
    {id:8,description:'',url:'',precio1:699, precio2:3499},
    {id:9,description:'',url:'',precio1:699, precio2:3499},
    {id:10,description:'',url:'',precio1:699, precio2:3499},
    {id:11,description:'',url:'',precio1:699, precio2:3499},
    {id:12,description:'',url:'',precio1:699, precio2:3499},

  ]
}
