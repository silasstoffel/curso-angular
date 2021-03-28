import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';
import { lowerCaseValidator } from '../../shared/validators/lower-case-validator';
import { NewUser } from './new-user';
import { SignUpService } from './sign-up.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: 'sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private plaformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {

    const fn = this.userNotTakenValidatorService.checkUserNameTaken();

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken() // Async
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });

    this.plaformDetector.isBrower() && this.emailInput.nativeElement.focus();
  }

  submit() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
    .signUp(newUser)
    .subscribe(
      () => this.router.navigate([''])
    );
  }
}
