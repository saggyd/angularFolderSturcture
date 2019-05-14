import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    userID: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor( private toastr: ToastrService ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(JSON.stringify(this.loginForm.value));
    this.toastr.success("Form submitted Successfully");
  }

}
