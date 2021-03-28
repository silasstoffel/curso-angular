import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './components/photos/photo-list/photo-list.resolver';
import { SignInComponent } from './components/home/sign-in/sign-in.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './components/home/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
    ],
  },

  {
    path: 'photos/user/:username',
    component: PhotoListComponent,
    resolve: { photos: PhotoListResolver },
  },
  { path: 'photos/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
