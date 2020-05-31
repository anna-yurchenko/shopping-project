import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {
  }

}
