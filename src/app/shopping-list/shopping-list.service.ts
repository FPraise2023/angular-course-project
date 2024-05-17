import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  updateIngredients = new Subject<void>();
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.updateIngredients.next();
  }

  onIngredientsTransfered(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updateIngredients.next();
  }
}
