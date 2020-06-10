import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: Boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userData.subscribe(user => {
      this.loggedIn = user !== null ? true : false
    })
  }

  logOut(){
    event.preventDefault()
    this.authService.logOut()
  }
}
