import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Subscription, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as ShoppingListAction from "./store/shoppinglist.action";
import * as fromApp from "../store/app.reducer";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private igChangedSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.ingredients = this.store.select("shoppingList");
    this.store.select("shoppingList").subscribe((data) => {
      console.log(data);
    });
    // this.ingredients = this.shoppingService.getIngredients();
    // this.igChangedSub = this.shoppingService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  ngOnDestroy() {
    // this.igChangedSub.unsubscribe();
  }
  onEditItem(index: number) {
    // this.shoppingService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListAction.StartEdit(index));
  }
}
