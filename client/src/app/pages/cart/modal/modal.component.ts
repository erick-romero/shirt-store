import { Component, OnInit,Inject,Input } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { VentasService } from 'src/app/services/ventas.service';

export interface DialogData {
  animal: string;
  name: string;
  items: any
  amount:any
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent3 implements OnInit {
  @Input() items:any
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  @Input() amount:any
  constructor(
    private invS: InventoryService,
    public dialogRef: MatDialogRef<ModalComponent3>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _formBuilder: FormBuilder,
    private venSer: VentasService
  ) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl1: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl1: ['', Validators.required],
      secondCtrl2: ['', Validators.required],
      secondCtrl3: ['', Validators.required],
      secondCtrl4: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });

  }

  ngOnInit(): void {
   
  }

  addPurchase(){
    let sale = {
      monto: this.data.amount,
      items: this.data.items,
      userData: {
        contacto: this.firstFormGroup.value,
        direccion: this.secondFormGroup.value
      }
    }
    
    this.venSer.createSale(sale)

  }

}
