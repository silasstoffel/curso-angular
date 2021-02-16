import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  private currentPage: number = 1;
  private username: string;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.photos = this.route.snapshot.data.photos;
    this.username = this.route.snapshot.params.username;
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe((res) => {
        this.filter = '';
        this.photos = this.photos.concat(res);
        if (!res.length) {
          this.hasMore = false;
        }
      });
  }
}
