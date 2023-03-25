import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  data="Get access to exclussive features by creating an Account"
  formdata={name:"",email:"",password:""};
  submit=false;
  constructor(){}

  ngOnInit(): void {
     }
    onsubmit(){

    }
    onSubmit(){
      console.log(this.formdata);
      

    }
 

}
