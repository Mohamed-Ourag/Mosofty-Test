import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',  // Ensure this matches the tag used in app.component.html
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  logginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService,private router :Router) {
    this.logginForm = this.fb.group({
      username: [''],
      firstname: [''],
      lastname: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  onSubmit() {
    const user: User = {
      username: this.logginForm.value.username,
      firstname: this.logginForm.value.firstname,
      lastname: this.logginForm.value.lastname,
      password: this.logginForm.value.password
    };
    this.userService.registerUser(user).subscribe(
      response => {
        console.log('User registered successfully', response);
        this.router.navigateByUrl('/login');

      },
      error => {
        console.error('Error registering user', error);
      }
    );
  }

  onLogin() {
    console.log('Login button clicked');
    this.router.navigateByUrl('/login');
  }
}
