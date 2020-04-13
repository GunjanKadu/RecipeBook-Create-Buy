import { Ingredient } from "../shared/ingredients.model";

const initialState = {
  ingredients: [new Ingredient("Apple", 5), new Ingredient("Tomatoes", 5)],
};

export function shoppingListReducer(state = initialState, action) {}
