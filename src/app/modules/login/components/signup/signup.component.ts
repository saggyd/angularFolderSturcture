import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  inputObject = [
    {
      placeholder: "username",
      type: "text",
      name: "username",
      id: "username"
    },
    {
      placeholder: "Email Address",
      type: "email",
      name: "email",
      id: "email"
    },
    {
      placeholder: "Password",
      type: "password",
      name: "password",
      id: "password"
    },
    {
      placeholder: "Confirm Password",
      type: "password",
      name: "confPassword",
      id: "confPassword"
    }
  ];
  constructor() { }

  changeHandler(event) {
    console.log(event);
  }
  
  ngOnInit() {
  }

}
