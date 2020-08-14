import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
    selector: '[appMagnify]'
})
export class MagnifyDirective {
    private defaultFontSize;
    private counter = 0;
    constructor(private element:ElementRef) {
        console.log("Magnify");
        console.log(element);

        this.defaultFontSize = window.getComputedStyle(element.nativeElement).fontSize;
        this.defaultFontSize = this.defaultFontSize.substring(0,this.defaultFontSize.length-2);
        this.defaultFontSize = Number(this.defaultFontSize);

        this.element.nativeElement.style.cursor = 'zoom-in';
        this.element.nativeElement.style.userSelect = 'none';
        console.log(this.defaultFontSize);
    }

    private magnify(element) {
        let fontSizeArray = [
            this.defaultFontSize,
            this.defaultFontSize+3,
            this.defaultFontSize+6,
            this.defaultFontSize+9,
            this.defaultFontSize+12,
        ];
        let newSize = fontSizeArray[++this.counter % fontSizeArray.length];
        element.nativeElement.style.fontSize = String(newSize+"px");
    }
    @HostListener('click') onClick(){
        this.magnify(this.element);
    }
    // @HostListener('mouseenter') onMouseEnter(){
    // }

}
