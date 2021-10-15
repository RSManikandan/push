import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import loginData  from 'db.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
 {
  _username:string="";
  _password:string ="";

  constructor( private router:Router) {
        console.log(loginData);
  }

  onLogin(){
    console.log(this._username);
    console.log(this._password);
    if (loginData.logindata[0].username === this._username && loginData.logindata[0].password === this._password)
    {
      this.router.navigate(['/home']);
    }
    else{
      alert("login failed");
    }
    }
  }

