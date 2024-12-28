import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[ReactiveFormsModule],

})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private service: LoginService) { }
  profileForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  sendrequest() {
     this.service.GetLoginDetails(this.profileForm.controls['username'].value,this.profileForm.controls['password'].value).subscribe(data=>{
      if(data!=null){
        if(data.userName == 'ram' && data.password =='ram'){
          this.router.navigate(['/user']);
         }
      }
     })

   }
  ngOnInit() {
  }

}
