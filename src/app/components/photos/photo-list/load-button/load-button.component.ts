import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor() {}

  ngOnInit() {}
}
