import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "./shoppinglist.service";
import { Subscription, Observable } from "rxjs";
import { Store } from "@ngrx/store";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private igChangedSub: Subscription;

  constructor(
    private shoppingService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select("shoppingList");
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
    this.shoppingService.startedEditing.next(index);
  }
}
