import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.scss']
})
export class EditmodalComponent implements OnInit {
  nombre = ''
  descripcion = ''
  precio = ''
  url = ''
  small = ''
  medium = ''
  large = ''
  id= ''
  constructor(
    private invS: InventoryService,
    public dialogRef: MatDialogRef<EditmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.nombre = this.data.nombre
    this.descripcion = this.data.descripcion
    this.precio = this.data.precio
    this.url = this.data.url
    this.small = this.data.small
    this.medium = this.data.medium
    this.large = this.data.large
    this.id = this.data.id
  }

  deleteShirt(){
    let shirt = {
      nombre:this.nombre,
      descripcion:this.descripcion,
      small:this.small,
      medium:this.medium,
      large:this.large,
      precio:this.precio,
      url:this.url,
      id:this.id
    }
    this.invS.deleteShirt(shirt)
  }

  updateShirt(){
    let shirt = {
      nombre:this.nombre,
      descripcion:this.descripcion,
      small:this.small,
      medium:this.medium,
      large:this.large,
      precio:this.precio,
      url:this.url,
      id:this.id
    }
    this.invS.editShirt(shirt)
    
  }

}
