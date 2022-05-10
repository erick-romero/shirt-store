import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent2 } from './modal/modal.component';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
 ventas:any
 selection = new SelectionModel<any>();
  displayedColumns: string[] = ['ID de venta', 'Monto', 'Nombre', 'Cantidad de prendas'];
  dataSource:any;
  total:any = 0 
  constructor(private venSer:VentasService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.venSer.ventas.subscribe(el=>{
      this.dataSource = el
      this.getTotal()
    })
  }


getTotal(){
  this.total  = 0
  this.dataSource.forEach((element :any)=> {
    this.total = this.total + element.monto
  });
}
  cantidad(el:any){
    let quant = 0
    el.items.forEach((element:any) => {
      quant = quant + parseInt(element.quantity)
    });
    return quant
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent2, {
      width: '50%',
      data: this.selection.selected[0],
    });
  
    dialogRef.afterClosed().subscribe((result :any)=> {
      console.log('The dialog was closed');
      
    });
  }
  
  verDetalle(){
    
    this.openEditDialog()
  }
  

}


