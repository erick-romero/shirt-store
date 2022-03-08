import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/services/fire-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string = ''
  password:string = ''
  constructor(private auth:FireAuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.email,this.password);
  }

}
