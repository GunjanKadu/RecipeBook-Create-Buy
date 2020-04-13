import { Ingredient } from "../shared/ingredients.model";
import { Action } from "@ngrx/store";
const initialState = {
  ingredients: [new Ingredient("Apple", 5), new Ingredient("Tomatoes", 5)],
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD_INGREDIENTS":
      return { ...state, ingredients: [...state.ingredients, action] };
  }
}
