import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

 
  inputplaceholder="you@example.com"
  pswplaceholder="Atleast two characters"
  email=''
  psw=''

  userDetails:any={
    manu2011:{username:"manu",password:"abc123",email:"manu2011gmail.com" },
    anu2012:{username:"anu",password:"abc123",email:"anu@2012" },
    meenu2013:{username:"meenu",password:"abc123",email:"meenu@2013" },
    maku2014:{username:"maku",password:"abc123",email:"maku@2014" },
    akhi2015:{username:"akhi",password:"abc123",email:"akhi@2015" },
  }
  // username: any;

  constructor()  { }

  ngOnInit(): void {
    
  }
  login(){
    var email=this.email
    var psw=this.psw
    var userDetails=this.userDetails
    if(email in userDetails){
      if(psw==userDetails[email]["password"]){
      alert("login success")
      }
      else{
        alert("email is not valid or not registerd yet")
      }
    }
    // alert('login clicked')

  }
  emailChange(event:any){
    this.email=event.target.value
    // console.log(this.email);
    
    
  }
  pswChange(event:any){
    this.psw=event.target.value
    // console.log(this.psw);

}
}
