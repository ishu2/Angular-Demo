import { Injectable } from '@angular/core';
import { Login } from 'src/app/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginData:Login[]=[];
  addData(l:Login):String{
     this.loginData.push(l);
     for(let i in this.loginData){
       console.log("!!!!!!!! "+JSON.stringify(this.loginData[i]));
     }
     return "SUCCESS";
  }

}
