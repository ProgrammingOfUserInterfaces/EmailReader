import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  // Mark as standalone so it can be imported directly by standalone components
  standalone: true,
})
export class Highlight {
  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    console.log('Focus event detected');
    this.highlight('lightyellow');
  }

  @HostListener('blur') onBlur() {
    console.log('Blur event detected');
    this.highlight('white');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
