import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginGroup.get('email')
  }

  get password(){
    return this.loginGroup.get('password')
  }

  loginHandler(){
    this.authService.logIn(this.loginGroup.value)
  }

}
