import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {
  }

}
