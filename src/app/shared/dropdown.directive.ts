import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openClass: boolean = false;

  constructor(private elRef: ElementRef) {
  }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.openClass = this.elRef.nativeElement.contains(event.target) ? !this.openClass : false;
  }
}
