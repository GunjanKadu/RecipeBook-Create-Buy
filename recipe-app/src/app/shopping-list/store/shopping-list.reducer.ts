import { Ingredient } from "../../shared/ingredients.model";
import * as ShoppingListActions from "./shoppinglist.action";

const initialState = {
  ingredients: [new Ingredient("Apple", 5), new Ingredient("Tomatoes", 5)],
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredients
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, action.payload] };

    default:
      return state;
  }
}
