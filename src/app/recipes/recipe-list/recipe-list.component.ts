import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipeList: Recipe[];

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipes();
  }
/*  onSelectRecipe(recipe: Recipe) {
    let id = this.recipeService.getRecipeId(recipe);
    this.router.navigate([id+1], {relativeTo: this.route})
  }*/

  onCreateRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
