import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginModel } from '../models/login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _model: LoginModel;
  private _loginForm: FormGroup;
  private _post: any;

  constructor(private _loginService: LoginService,
    private _fb: FormBuilder, private _router:Router) { }

  ngOnInit() {
    this._model = new LoginModel("","");
    this._loginForm = this._fb.group({
      'user': [null, Validators.compose([Validators.required])],
      'password': [null, Validators
        .compose([Validators.required, 
          Validators.minLength(5)])],
      'validate' : ''
    });
  }

  do_login(data:any) {
    this._model.user = data.user;
    this._model.password = data.password;

    this._loginService.Login(this._model)
      .subscribe(data => {
        alert("login satisfactorio!");
        console.log("asdasdadadsasdsadasd");
        this._router.navigate(['/dashboard']);
       },
      error => {
        alert("datos incorrectos!");
       });
  }



}
