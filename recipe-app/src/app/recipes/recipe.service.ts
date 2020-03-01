import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "Simply a test",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-dinner-ideas-tofu-bowl-1574613204.jpg?crop=0.811xw:0.541xh;0.0737xw,0.247xh&resize=640:*",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 1)]
    ),
    new Recipe(
      "Big Fat Burger",
      "Simply a test 1 ",
      "https://www.diabetes.org/sites/default/files/styles/crop_large/public/2019-06/Healthy%20Food%20Made%20Easy%20-min.jpg",
      [new Ingredient("Wurst", 1), new Ingredient("Cheese Breads", 1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipeById(id: number) {
    return this.recipes[id];
  }
}
