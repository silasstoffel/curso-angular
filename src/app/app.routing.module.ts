import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhotoFormComponent } from "./components/photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./components/photos/photo-list/photo-list.component";
import { NotFoundComponent } from './errors/not-found/not-found.component';

export const routes: Routes = [
  { path: "photos/user/flavio", component: PhotoListComponent },
  { path: "photos/add", component: PhotoFormComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
