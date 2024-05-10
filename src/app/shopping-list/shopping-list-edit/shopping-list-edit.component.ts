import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  addIngredient(nameInput: string, amountInput: string) {
    this.ingredientAdded.emit(new Ingredient(nameInput,+amountInput));
  }
}
