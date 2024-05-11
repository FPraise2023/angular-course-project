import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) {
  }
  ngOnInit(): void {
    this.recipeService.selectRecipe.subscribe(
      (recipe) => this.selectedRecipe = recipe
    )
  }

  toShoppingList() {
    this.shoppingListService.onIngredientsTransfered(this.selectedRecipe.ingredients)
  }
}
