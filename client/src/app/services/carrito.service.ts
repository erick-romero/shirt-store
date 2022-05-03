import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carritoItems:any[] = []
  carritoItems$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  constructor() {
    this.carritoItems = localStorage.getItem('items')?.split(',') || []
    this.carritoItems$.next(this.carritoItems)
   }

   addItem(id:any){
     this.carritoItems.push(id)
     this.carritoItems$.next(this.carritoItems)
     localStorage.setItem('items',this.carritoItems.join(','))
   }
}
