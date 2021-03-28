import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, RouterModule],
  exports: [],
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  providers: [],
})
export class HomeModule {}
