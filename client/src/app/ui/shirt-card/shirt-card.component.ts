import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-shirt-card',
  templateUrl: './shirt-card.component.html',
  styleUrls: ['./shirt-card.component.scss']
})
export class ShirtCardComponent implements OnInit {
  @Input() shirt: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectDetail(){
    this.router.navigate(['/product'],{ queryParams: { id: this.shirt.id }})
  }

}
