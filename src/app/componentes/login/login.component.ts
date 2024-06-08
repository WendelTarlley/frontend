import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errorMessage: any;

  hide:boolean = true
  loginForm:FormGroup
  constructor(private fb:FormBuilder,private loginService:LoginService, private router:Router) {
    this.loginForm = this.fb.group({
      email:[null,Validators.required],
      password:["",Validators.required]
    })
   }

  ngOnInit() {
    let token = localStorage.getItem("token")

    if(token !== null || token !== undefined){
      this.router.navigate(["pagina-inicial"])
    }
  }

  loginTeste(){
    const login = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.loginService.login(login).subscribe({
      complete: () => this.router.navigate(["pagina-inicial"])
    })
  }
}
