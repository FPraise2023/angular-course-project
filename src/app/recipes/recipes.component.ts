import {Component} from '@angular/core';
import {Recipe} from "./recipe.model";

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
