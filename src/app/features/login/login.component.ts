import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = {} as FormGroup;
  type: string = 'password';

  constructor( private _fb: FormBuilder,     public router: Router) { }

  ngOnInit(): void {
    this.formLogin = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['',[Validators.required],
      ],
    });
  }

  get email() {
    return this.formLogin?.get('email');
  }

  get password() {
    return this.formLogin?.get('password');
  }

  onSubmitLogin() {
    console.log(`email:${this.formLogin.value.email}, password:${this.formLogin.value.password}`)
    this.router.navigate(['../home']);
  }

}
