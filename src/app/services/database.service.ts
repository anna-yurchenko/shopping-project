import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  shoppingItems: any

  constructor(private firestore: AngularFirestore) {
    this.shoppingItems = firestore.collection('shopItems').valueChanges()
  }

  addUserData(uid, userData){
    this.firestore.collection('users').doc(uid).set(userData)
  }

}
