import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appResaltador]'
})
export class ResaltadorDirective {

  constructor(
    public el:ElementRef
  ) {
    var element =this.el.nativeElement;
    element.style.background = '#C2FF00';
    element.style.padding = '10px';
  }

}
