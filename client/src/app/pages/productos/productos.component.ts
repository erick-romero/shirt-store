import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  shirts:any
  shirts1:any
  state1=false
  state2=false
  state3=false
  state4=false
  state5=false
  state6=false
  constructor(private invS:InventoryService) { }
  

  ngOnInit() {
    this.invS.items.subscribe(items=>{
      this.shirts = items
      this.shirts1 = items
    })
  }

  filterColor(event:any){
    this.shirts = this.shirts1
    console.log(event)
    if(event.selected==true){
    this.shirts = this.shirts.filter((shirt:any) => shirt.color == (event.source.value).toLowerCase())
    }
    console.log(this.shirts)
  }

  

  

}

