import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { filterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  imports: [CommonModule, PhotoModule],
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    filterByDescription,
  ],
})
export class PhotoListModule {}
