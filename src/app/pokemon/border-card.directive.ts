import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private defaultColor: string = '#f5f5f5';
  private defaultColorMouseEnter: string = '#009688';
  private defaultHeight = 180;

  constructor(private el: ElementRef) {
    this.setBorderAndHeight(this.defaultColor, this.defaultHeight);
  }

  @Input('appBorderCard') borderColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderAndHeight(this.borderColor || this.defaultColorMouseEnter, this.defaultHeight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderAndHeight(this.defaultColor, this.defaultHeight);
  }

  setBorderAndHeight(color: string, height: number) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
    this.el.nativeElement.style.height = height;
  }
}
