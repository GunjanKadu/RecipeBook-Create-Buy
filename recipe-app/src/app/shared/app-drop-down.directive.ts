import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[AppDropDown]"
})
export class AppDropDownDirective {
  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  @HostBinding("class.open") isOpen = false;

  constructor() {}
}
