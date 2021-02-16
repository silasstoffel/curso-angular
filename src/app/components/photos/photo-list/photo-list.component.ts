import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string = '';
  // Essa é propiedade para controlar quantidade de requisições, aumentando
  // a performance da aplicação.
  debounce: Subject<string> = new Subject<string>();
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
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter: string) => (this.filter = filter));
  }

  ngOnDestroy(): void {
    // Boa prática.
    // Como debounce nunca sempre fica escutando modificações é necessário remover
    // subscribe() ao sair da página ou destruir o componente.
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe((res) => {
        this.photos = this.photos.concat(res);
        if (!res.length) {
          this.hasMore = false;
        }
      });
  }
}
