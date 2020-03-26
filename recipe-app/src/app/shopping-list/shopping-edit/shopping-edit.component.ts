import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredients.model";
import { ShoppingListService } from "../shoppinglist.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private shoppingService: ShoppingListService) {}

  @ViewChild("f", { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  edittedItemIndex: number;
  editedItem: Ingredient;

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(
        this.edittedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.edittedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }
  ngOnDestroy() {}
}
