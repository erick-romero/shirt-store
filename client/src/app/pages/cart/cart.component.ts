import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { InventoryService } from 'src/app/services/inventory.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent3 } from './modal/modal.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items:any = []
  carrItems:any = []
  allItems:any =[]
  sizes:any =[]
  ids:any =[]
  amount:any = 0
  
  constructor(private carSer : CarritoService,private invSer: InventoryService,public dialog: MatDialog) { }
  
  ngOnInit(): void {


    this.invSer.items.subscribe(el=>{
      this.allItems = el

    })
    this.carSer.carritoItems$.subscribe(el=>{
      this.items = el
      el.forEach(x=>{
        if(x.length==1){
          this.sizes.push(x)
        }else{52
          this.ids.push(x)
        }
      })
  
    })
   
    this.dataProcess().then(x=>{
      this.calcAmount()
    })
    
   
    
   
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent3, {
      width: '50%',
      data: {"items":this.carrItems,
              "amount":this.amount
    },
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      
    });
  }
  calcAmount(){
    this.amount=0
    this.carrItems.forEach((el:any) => {
      
      this.amount = this.amount + (el.quantity * el.item.precio)
    });
    
  }

  elimItem(){

  }
  async dataProcess(){
    do {
      await this.delay(1000)
    }while(this.allItems.length<=1)
    
    this.carrItems = this.ids.map((x:any,idx:any)=>{
      return {
       id: x,
       size: this.sizes[idx],
       quantity:1,
        item: this.allItems.find((el:any)=>el.id == x)
     }
    })
    
  }

  changeObj(ev:any){
    let op = JSON.parse(ev)
    this.carrItems.forEach((x:any,idx:any)=>{
      if(x.id == op.id){
        this.carrItems[idx].quantity = op.num
      }
    })
    this.calcAmount()
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
