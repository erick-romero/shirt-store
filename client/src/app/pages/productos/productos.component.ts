import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  shirts:any
  constructor(private invS:InventoryService) { }

  ngOnInit() {
    this.invS.items.subscribe(items=>{
      this.shirts = items
    })
    
  }

  

}

