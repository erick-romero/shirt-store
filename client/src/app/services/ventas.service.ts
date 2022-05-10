import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private ventasCollection: AngularFirestoreCollection<any>;
  ventas: Observable<any>;
  constructor(private afs: AngularFirestore) { 
    this.ventasCollection = afs.collection<any>('sales');
    this.ventas = this.ventasCollection.valueChanges();
  }

  createSale(sale:any){
    const id = this.afs.createId();
    sale.id = id
    this.ventasCollection.doc(id).set(sale);
  }

}
