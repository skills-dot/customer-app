import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[ReactiveFormsModule]
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) { }
  profileForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  sendrequest() {
    if(this.profileForm.controls['username'].value =='ram' && this.profileForm.controls['password'].value =='ram'){
     this.router.navigate(['/user']);
    }
   }
  ngOnInit() {
  }

}
