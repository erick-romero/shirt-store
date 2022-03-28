import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shirt-card',
  templateUrl: './shirt-card.component.html',
  styleUrls: ['./shirt-card.component.scss']
})
export class ShirtCardComponent implements OnInit {
  @Input() shirt: any;
  constructor() { }

  ngOnInit(): void {
  }

}
