import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  updateIngredients = new EventEmitter<Ingredient[]>();
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.updateIngredients.emit(this.ingredients.slice());
  }

  onIngredientsTransfered(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updateIngredients.emit(this.ingredients.slice());
  }
}
