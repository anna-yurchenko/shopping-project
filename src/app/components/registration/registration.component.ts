import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationGroup = new FormGroup({
    gender: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  },
  {
    validators: checkConfPass
    
  })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.registrationGroup.valueChanges.subscribe((form) => {console.log(form)})
  }

  registerHandler(){
    this.authService.createUser(this.registrationGroup.value)
  }

  get gender(){
    return this.registrationGroup.get('gender')
  }

  get firstName(){
    return this.registrationGroup.get('firstName')
  }

  get lastName(){
    return this.registrationGroup.get('lastName')
  }

  get email(){
    return this.registrationGroup.get('email')
  }

  get password(){
    return this.registrationGroup.get('password')
  }

  get confirmPassword(){
    return this.registrationGroup.get('confirmPassword')
  }

}

export const checkConfPass: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const passOne = control.get('password')
  const passTwo = control.get('confirmPassword')
  return (passOne && passTwo && (passOne.value !== passTwo.value)) ? { 'noMatch': true } : null;
}