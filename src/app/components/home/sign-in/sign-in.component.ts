import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const userName = this.getAttrFormValue('userName');
    const password = this.getAttrFormValue('password');
    this.authService.authenticate(userName, password).subscribe(
      (res) => this.router.navigateByUrl(`/photos/user/${userName}`),
      (err) => {
        alert('Deu ruim');
        this.loginForm.reset();
      }
    );
  }

  private getAttrFormValue(attr: string): string {
    return this.loginForm.get(attr).value;
  }
}
