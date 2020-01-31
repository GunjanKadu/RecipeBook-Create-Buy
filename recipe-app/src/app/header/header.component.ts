import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  recipeSelected: boolean;
  @Output() isrecipeSelected = new EventEmitter<boolean>();

  shoppingListSelected: boolean;
  @Output() isshoppingListSelected = new EventEmitter<boolean>();

  constructor() {}
  onRecipeClick() {
    this.recipeSelected = true;
    this.shoppingListSelected = false;
    this.isrecipeSelected.emit(this.recipeSelected);
    this.isshoppingListSelected.emit(this.shoppingListSelected);
  }
  onShoppingClick() {
    this.recipeSelected = false;
    this.shoppingListSelected = true;
    this.isshoppingListSelected.emit(this.shoppingListSelected);
    this.isrecipeSelected.emit(this.recipeSelected);
  }
}
