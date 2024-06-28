import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
  }

  @Input('appBorderCard')  borderColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#585858');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = "3px solid " + color;
  }
}
