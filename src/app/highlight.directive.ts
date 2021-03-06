import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#273746');
    this.textColor('white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.textColor('#273746');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private textColor(color:string){
    this.el.nativeElement.style.color = color;
  }
}