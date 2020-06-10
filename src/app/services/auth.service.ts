import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from './database.service';
import { pipe, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any
  userId: string
  // userInitials: string

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private dbService: DatabaseService,
    private router: Router
    ) {

      this.userData = this.fireAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            this.userId = user.uid
            return this.firestore.doc(`users/${user.uid}`).valueChanges()
          } else {
            return of(null)
          }
        })
      );
      this.userData.subscribe()
      // this.userInitials = this.userData.firstName.slice(0,1)+this.userData.lastName.slice(0,1)
     }

  createUser(userData){
    const {password, email, gender, firstName, lastName} = userData
    this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.dbService.addUserData(res.user.uid, {email, gender, firstName, lastName})
        this.router.navigate(['/'])
      })
      .catch(err => console.log(err.message))
  }

  logIn(userData){
    const {email, password} = userData
    this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.router.navigate(['/'])
    })
    .catch(err => console.log(err.message))
  }

  logOut(){
    this.fireAuth.signOut()
    this.router.navigate(['/'])
  }

  getUser(){
    return this.userData
  }

  updateUser(formData){
    this.firestore.doc(`users/${this.userId}`).update(formData)
  }
    
}

