import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import {LoginService} from '../login.service';

// component decorator(declaration,contains metdata of this particular component)
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  loginService:LoginService;
  //         (reference of loginService )
  constructor(loginService:LoginService) { 
    this.loginService=loginService;
  }

  login:Login=new Login();
  ngOnInit() {
    this.login.userName="Ishita",
    this.login.password="abcd"
  }

  onSubmit(){
    console.log(JSON.stringify(this.login));
    this.loginService.addData(this.login);
    this.login=new Login();
  }

}


