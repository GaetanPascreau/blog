import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  constructor(){
  	var firebaseConfig = {
    apiKey: "AIzaSyCB18PFAXeB_zTnXYx8533zkAhNN6M6ZPA",
    authDomain: "blog-pascreau.firebaseapp.com",
    databaseURL: "https://blog-pascreau.firebaseio.com",
    projectId: "blog-pascreau",
    storageBucket: "blog-pascreau.appspot.com",
    messagingSenderId: "570670042179",
    appId: "1:570670042179:web:bc4da9069f4d6c654398f6",
    measurementId: "G-XWV5XC5NCC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  }
}


