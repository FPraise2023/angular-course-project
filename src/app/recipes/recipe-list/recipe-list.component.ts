import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipeList: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipes();
  }
  onSelectRecipe(recipe: Recipe) {
    this.recipeService.onRecipeSelected(recipe);
  }
}
