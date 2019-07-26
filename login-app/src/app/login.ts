import { __assign } from 'tslib';

export class Login {

     userName:String;
     password:String;

     // ={} -->> this means default value(if you wont provide snything,it will take a default value)
     constructor( values:Object={}){
        Object:__assign(this,values)
     }

}

// let login=new Login();
