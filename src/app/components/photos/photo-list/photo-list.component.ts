import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this.route.snapshot.data.photos;
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
}
