import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "Simply a test",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-dinner-ideas-tofu-bowl-1574613204.jpg?crop=0.811xw:0.541xh;0.0737xw,0.247xh&resize=640:*"
    ),
    new Recipe(
      "A Test Recipe 1",
      "Simply a test 1 ",
      "https://www.diabetes.org/sites/default/files/styles/crop_large/public/2019-06/Healthy%20Food%20Made%20Easy%20-min.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
