import {Directive, ElementRef, HostListener, Input, input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input() appHoverHighlight = '' ;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseLeave() {
    this.highlight(this.appHoverHighlight || 'yellow');
  }
  @HostListener('mouseleave') onMouseMove() {
    this.highlight('');
  }


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

  }
}
