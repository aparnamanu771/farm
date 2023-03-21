import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  data="Get access to exclussive features by creating an Account"
  inputplaceholder="you@example.com"
  pswplaceholder="Atleast two characters"
  email=''
  psw=''

  userDetails:any={
    manu2011:{uaername:"manu",password:"abc123",email:"manu@2011" },
    anu2012:{uaername:"anu",password:"abc123",email:"anu@2012" },
    meenu2013:{uaername:"meenu",password:"abc123",email:"meenu@2013" },
    maku2014:{uaername:"maku",password:"abc123",email:"maku@2014" },
    aku2015:{uaername:"aku",password:"abc123",email:"aku@2015" },
  }

  constructor()  { }

  ngOnInit(): void {
    
  }
  login(){
    alert('login clicked')

  }
  emailChange(event:any){
    this.email=event.target.value
    console.log(this.email);
    
    
  }
  pswChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);

}
}
