import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredients.model";

export const ADD_INGREDIENTS = "ADD_INGREDIENTS";

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;
  payload: Ingredient;
}
