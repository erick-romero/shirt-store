import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FireAuthService } from 'src/app/services/fire-auth.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  selectedValue:any
  id:any
  shirt:any
  constructor(private route: ActivatedRoute, private invS: InventoryService,private carrS:CarritoService) { }
  foods: any = [
    {value: 'S', viewValue: 'Pequeño'},
    {value: 'M', viewValue: 'Mediano'},
    {value: 'L', viewValue: 'Grande'},
  ];
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    })

    this.invS.items.subscribe(items=>{
      this.shirt = items.find((el:any) => el.id == this.id)
      console.log(this.shirt)
    })

  }

  addToCart(){
    console.log(this.selectedValue)
    this.carrS.addItem(this.shirt.id,this.selectedValue)
  }
  changeSize(ev:any){
    console.log(ev)
  }
}
