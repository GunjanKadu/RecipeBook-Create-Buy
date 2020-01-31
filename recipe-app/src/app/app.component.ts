import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isRecipeSelected: boolean = true;
  isshoppingListSelected: boolean;

  recipeSelected(event: boolean) {
    this.isRecipeSelected = event;
  }
  shoppingListSelected(event: boolean) {
    this.isshoppingListSelected = event;
  }
}
