import {Component} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {

  constructor(private shoppingListService: ShoppingListService) {
  }
  addIngredient(nameInput: string, amountInput: string) {
    this.shoppingListService.onIngredientAdded(new Ingredient(nameInput,+amountInput));
  }
}
