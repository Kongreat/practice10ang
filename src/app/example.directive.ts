import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appExample]'
})

export class ExampleDirective {

  constructor() { }

  @HostBinding('class.redBlock') redBlock = false;
  @HostBinding('style.font-size') fontSize;

  @HostListener('click') function(): void{
    this.redBlock = !this.redBlock;
    this.fontSize = '20px';
  }
}
