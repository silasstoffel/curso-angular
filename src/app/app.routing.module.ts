import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './components/photos/photo-list/photo-list.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'home',
    loadChildren: './components/home/home.module#HomeModule'
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
