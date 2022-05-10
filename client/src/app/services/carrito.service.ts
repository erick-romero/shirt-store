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

   addItem(id:any,size:any){
     this.carritoItems.push(id)
     this.carritoItems.push(size)
     this.carritoItems$.next(this.carritoItems)
     localStorage.setItem('items',this.carritoItems.join(','))
   }

   elimItem(id:any){
    const index = this.carritoItems.indexOf(id);
    if (index > -1) {
      this.carritoItems.splice(index+1, 1);
      this.carritoItems.splice(index, 1);
      this.carritoItems$.next(this.carritoItems)
      localStorage.setItem('items',this.carritoItems.join(','))
      window.location.reload();
    }
   }
}
