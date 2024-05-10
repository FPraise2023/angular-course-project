import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() selectRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Good Old-Fashioned Pancakes',
      'Perfect pancakes are easier to make than you think. ',
      'https://www.allrecipes.com/thmb/tOfkDV1xc28JMmITPQlQwy3FNWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg',
      [
        new Ingredient('Apples', 5), new Ingredient('Eggs', 4)
      ]),

    new Recipe('Good Old-Fashioned Pancakes',
      'Perfect pancakes are easier to make than you think. ' +
      'This pancake recipe produces thick, fluffy, and all-around delicious ' +
      'pancakes with just a few ingredients that are probably already in your ' +
      'kitchen (and it\'s so much better than the boxed stuff).',
      'https://www.allrecipes.com/thmb/tOfkDV1xc28JMmITPQlQwy3FNWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg',
      [
        new Ingredient('Apples', 5), new Ingredient('Eggs', 4)
      ]),

    new Recipe('Pickled Egg Salad Sandwich',
      'If you want to add a little zing to your egg salad, pickle your eggs first. ' +
      'It makes a great twist on a classic and might just become your preferred egg salad sandwich.',
      'https://www.allrecipes.com/thmb/9gVChRz5smugwtGt8MGtO2Ah4gI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pickled-egg-salad-sandwich-2000-19f667434d354303a804773063abbfe7.jpg',
      [
        new Ingredient('Orange', 3), new Ingredient('flour', 1)
      ]),

    new Recipe('Crispy Tater Caesar Salad',
      'This crispy tater Caesar salad is for you if you love fries in a salad. ' +
      'Crispy smashed tater tot croutons, a doctored-up bottled Caesar dressing, ' +
      'and crispy chicken cutlets join Romaine lettuce and Parmesan in this meal in a bowl.',
      'https://www.allrecipes.com/thmb/duInZUhawM-i0zRXtsKiZQ5MiRo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8628372_Crispy-Tater-Caesar-Salad_Dotdash-Meredith-Food-Studios_4x3-660c08772b3d405abaa397597a5d8c17.jpg',
      [
        new Ingredient('Beef', 5), new Ingredient('Tomatoes', 4)
      ])
  ];

  onSelectRecipe(recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }
}
