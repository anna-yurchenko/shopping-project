import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editEnabled: Boolean = false
  initials: string


  profileGroup = new FormGroup({
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private authService: AuthService) { }

  get gender(){
    return this.profileGroup.get('gender')
  }

  get firstName(){
    return this.profileGroup.get('firstName')
  }

  get lastName(){
    return this.profileGroup.get('lastName')
  }

  get email(){
    return this.profileGroup.get('email')
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => {
      const {
        firstName,
        lastName,
        email,
        gender
      } = data;
      this.profileGroup.setValue({
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender
      })
      this.initials = firstName.slice(0,1)+lastName.slice(0,1)
    })
  }

  enableEdit(){
    this.editEnabled = true
  }

  updateHandler(){
    this.authService.updateUser(this.profileGroup.value)
    this.editEnabled = false
  }

}
