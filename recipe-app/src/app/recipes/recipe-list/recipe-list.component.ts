import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "Simply a test",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-dinner-ideas-tofu-bowl-1574613204.jpg?crop=0.811xw:0.541xh;0.0737xw,0.247xh&resize=640:*"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
