import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { InventoryService } from 'src/app/services/inventory.service';
import { EditmodalComponent } from './editmodal/editmodal.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  selection = new SelectionModel<any>();
  displayedColumns: string[] = ['Nombre', 'Descripcion', 'Small', 'Medium','Large','precio'];
  dataSource2 = ELEMENT_DATA;
  dataSource:any;

  constructor(public dialog: MatDialog,private invS: InventoryService) { }

  ngOnInit() {
    this.invS.items.subscribe(items=>{
      this.dataSource = items
      console.log(items)
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditmodalComponent, {
      width: '50%',
      data: this.selection.selected[0],
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  editarCamisa(){
    
    this.openEditDialog()
  }
}
