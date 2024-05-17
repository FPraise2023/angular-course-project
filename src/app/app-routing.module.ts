import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {NoRecipeDetailComponent} from "./recipes/no-recipe-detail/no-recipe-detail.component";
import {EditRecipeComponent} from "./recipes/edit-recipe/edit-recipe.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent,
    children: [
      { path: '', component: NoRecipeDetailComponent },
      { path: 'new', component: EditRecipeComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: EditRecipeComponent }
    ]},
  { path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
