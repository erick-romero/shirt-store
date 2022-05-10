import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {
  @Input() item:any
  @Output() changeEvent = new EventEmitter<string>();

  changePrice(ev: any) {
 
    let data = {
      num: ev.target.value,
      id: this.item.id
    }
    this.changeEvent.emit(JSON.stringify(data));
  }

  constructor(private carSer: CarritoService) { }

  ngOnInit(): void {
  }

  elimItem(){
this.carSer.elimItem(this.item.id)
  }

}
