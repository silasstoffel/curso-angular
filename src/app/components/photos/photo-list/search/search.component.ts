import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() onTyping = new EventEmitter<string>();
  @Input() search:string = '';

  // Essa é propiedade para controlar quantidade de requisições, aumentando
  // a performance da aplicação.
  debounce: Subject<string> = new Subject<string>();
  constructor() {}

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    // Boa prática.
    // Como debounce nunca sempre fica escutando modificações é necessário remover
    // subscribe() ao sair da página ou destruir o componente.
    this.debounce.unsubscribe();
  }
}
