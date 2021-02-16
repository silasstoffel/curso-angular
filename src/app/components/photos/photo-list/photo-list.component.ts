import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this.route.snapshot.data.photos;
  }
}
