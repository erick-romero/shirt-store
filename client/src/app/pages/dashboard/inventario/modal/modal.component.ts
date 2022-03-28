import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  nombre = ''
  descripcion = ''
  precio = ''
  url = ''
  small = ''
  medium = ''
  large = ''
  constructor(
    private invS: InventoryService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
  }

  createShirt(){
    let shirt = {
      nombre:this.nombre,
      descripcion:this.descripcion,
      small:this.small,
      medium:this.medium,
      large:this.large,
      precio:this.precio,
      url:this.url
    }
    this.invS.createShirt(shirt)
  }
}
