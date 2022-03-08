import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  loginClicks: number = 0
  showLoginBtn: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  showLogin(){
    this.loginClicks++;
    if(this.loginClicks >= 5)
    {
      this.showLoginBtn = true
    }
  }

}
