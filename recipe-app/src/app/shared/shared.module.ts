import { NgModule } from "@angular/core";
import { AlertComponent } from "./ALert/alert.component";
import { LoadingSpinnerComponent } from "./Loading Spinner/loadingSpinner.components";
import { AppDropDownDirective } from "./app-drop-down.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AlertComponent, LoadingSpinnerComponent, AppDropDownDirective],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    AppDropDownDirective,
    CommonModule
  ]
})
export class SharedModule {}
