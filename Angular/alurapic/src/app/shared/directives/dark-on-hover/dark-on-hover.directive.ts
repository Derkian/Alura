import { Directive, ElementRef, HostListener, Renderer, Input } from "@angular/core";


@Directive({
    selector : '[apDarkOnHolver]'
})
export class DarkOnHolverDirective {


    @Input() brightness : string = '70%';

    constructor(private el : ElementRef, private render : Renderer){}

    @HostListener('mouseover')
    onHolverOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    onHolverOut(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}