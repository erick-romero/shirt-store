import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email:string, password:string) {
    this.auth.signInWithEmailAndPassword( email, password);
  }

  logout() {
    this.auth.signOut();
  }
}
