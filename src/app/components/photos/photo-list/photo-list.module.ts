import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { filterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from '../../shared/directives/dark-on-hover/dark-on-hover.module';

@NgModule({
  imports: [CommonModule, PhotoModule, CardModule, DarkOnHoverModule],
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    filterByDescription,
    SearchComponent
  ],
})
export class PhotoListModule {}
