import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
  name: 'filterByDescription',
})
export class filterByDescription implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string): Photo[] {
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    if (descriptionQuery) {
      return photos.filter((p) =>
        p.description.toLowerCase().includes(descriptionQuery)
      );
    }
    return photos;
  }
}
