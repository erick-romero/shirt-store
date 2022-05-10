import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private carrS:CarritoService) { }
  items:any
  ngOnInit(): void {
    this.carrS.carritoItems$.subscribe((el)=>{
      
      this.items = el.length/2
      console.log(this.items)
      if(this.items> 0){
        console.log(this.items)
        this.hidden=false
      }
    })
  }
  hidden = true;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
