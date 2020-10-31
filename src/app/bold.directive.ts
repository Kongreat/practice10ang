import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  @HostBinding('style.cursor') get changeCursor(): string{
    return 'pointer';
  }

  // @HostListener('mouseenter') onMouseEnter(): void {
  //   this.fontWeight = 'bold';
  // }
  //
  // @HostListener('mouseleave') onMouseLeave(): void {
  //   this.fontWeight = 'normal';
  // }




  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.toggleBold('normal');
  }
//
  @HostListener('mouseenter') onMouseEnter(): void {
    this.toggleBold('bold');
}

  @HostListener('mouseleave') onMouseLeave(): void {
    this.toggleBold('normal');
}

  private toggleBold(value: string): void{
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', value );
  }

}
