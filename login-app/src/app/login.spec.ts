import { Login } from './login';

describe('Login', () => {
  it('should create an instance', () => {
    expect(new Login()).toBeTruthy();
  });
  it('should create object with userdefined values',()=>{
    let login:Login=new Login({
      userName:"Ishita",
      password:"asdfg"
    });
    expect(login.userName).toEqual("Ishita")
    expect(login.userName).toEqual("bubuibuib");
  });
});
