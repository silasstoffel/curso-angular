import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-v-message',
  templateUrl: './vmessage.component.html',
})
export class VMessageComponent implements OnInit {
  @Input() message: string;

  constructor() {}

  ngOnInit() {}
}
