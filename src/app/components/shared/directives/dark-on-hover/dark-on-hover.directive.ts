import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({ selector: '[dark-on-hover]' })
export class DarkOnHoverDirective {

  @Input() brightness: number = 70;

  constructor(private el: ElementRef, private render: Renderer) {}

  @HostListener('mouseover')
  darkenOn() {
    this.setFilterBrightness(this.brightness);
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.setFilterBrightness(100);
  }

  private setFilterBrightness(percent: number) {
    this.render.setElementStyle(
      this.el.nativeElement,
      'filter',
      `brightness(${percent}%)`
    );
  }
}
