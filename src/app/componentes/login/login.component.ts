import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errorMessage: any;

  hide:boolean = true
  loginForm:FormGroup
  constructor(private fb:FormBuilder,private loginService:LoginService) {
    this.loginForm = this.fb.group({
      email:[null,Validators.required],
      password:["",Validators.required]
    })
   }

  ngOnInit() {
  }

  loginTeste(){
    const login = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.loginService.login(login).subscribe({
      next: result => console.log(result)
    })
  }
}
