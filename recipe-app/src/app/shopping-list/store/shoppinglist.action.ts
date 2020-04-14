import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredients.model";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";
export const UPDATE_INGREDIENT = "UPDATE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  payload: Ingredient;

  constructor(payload: Ingredient) {
    this.payload = payload;
  }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;
  payload: Ingredient[];

  constructor(payload: Ingredient[]) {
    this.payload = payload;
  }
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: { index: number; ingredient: Ingredient }) {}
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor(public payload: Number) {}
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient;
