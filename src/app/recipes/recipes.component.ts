import {Component, Input} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  recipeToDisplay: Recipe;

  onRecipeSelected(recipe: Recipe) {
    this.recipeToDisplay = recipe;
  }
}
