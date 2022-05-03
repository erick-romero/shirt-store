import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shirt = {
    descripcion :"Camisa blanca lisa sin diseño",
    id: "0YvxdIoVV3G5zGvcT2xk",
    large:"26",
    medium:"2",
    nombre:"Camisa blanca",
    precio:"135",
    small:"13",
    url:"https://i.imgur.com/o4zxVZg.png"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
