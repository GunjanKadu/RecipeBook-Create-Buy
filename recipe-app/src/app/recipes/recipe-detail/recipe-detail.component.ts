import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: number;
  toShoppingList() {
    this.recipeService.addIngredientToShoppingList(
      this.selectedRecipe.ingredients
    );
  }
  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
  ngOnInit() {
    console.log(this.route);
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.selectedRecipe = this.recipeService.getRecipeById(this.id);
    });
  }
}
