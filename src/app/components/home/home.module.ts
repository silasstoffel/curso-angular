import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VMessageModule],
  exports: [],
  declarations: [SignInComponent],
  providers: [],
})
export class HomeModule {}
