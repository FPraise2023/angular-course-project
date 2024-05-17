import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientList: Ingredient[];
  updateIngredientsSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredientList = this.shoppingListService.getIngredients();
    this.updateIngredientsSub = this.shoppingListService.updateIngredients.subscribe(
      () => this.shoppingListService.getIngredients()
    )
  }

  ngOnDestroy() {
    this.updateIngredientsSub.unsubscribe();
  }


}
