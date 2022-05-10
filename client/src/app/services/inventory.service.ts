import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;
  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<any>('shirts');
    this.items = this.itemsCollection.valueChanges();
  }

  createShirt(shirt:any){
    const id = this.afs.createId();
    shirt.id = id
    this.itemsCollection.doc(id).set(shirt);
  }

  editShirt(shirt:any){
    this.afs.doc<any>('shirts/'+shirt.id).update(shirt)
  }

  deleteShirt(shirt:any){
    this.afs.doc<any>('shirts/'+shirt.id).delete()
  }

  addBuy(obj:any){
    
  }
}
