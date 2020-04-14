import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredients.model";
import { ShoppingListService } from "../shoppinglist.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from "../store/shoppinglist.action";
import * as fromShoppingList from "../store/shopping-list.reducer";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(
    private shoppingService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  @ViewChild("f", { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  edittedItemIndex: number;
  editedItem: Ingredient;

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.shoppingService.updateIngredient(
      //   this.edittedItemIndex,
      //   newIngredient
      // );
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({
          index: this.edittedItemIndex,
          ingredient: newIngredient,
        })
      );
    } else {
      // this.shoppingService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    // this.shoppingService.deleteIngredient(this.edittedItemIndex);
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient(this.edittedItemIndex)
    );
    this.onClear();
  }
  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.edittedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  ngOnDestroy() {}
}
