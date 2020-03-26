import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Ingredient } from "../../shared/ingredients.model";
import { ShoppingListService } from "../shoppinglist.service";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingListService) {}

  @ViewChild("nameInput", { static: false }) name: ElementRef;
  @ViewChild("amountInput", { static: false }) amount: ElementRef;

  onAdd() {
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredient(newIngredient);
  }
  ngOnInit() {}
}
