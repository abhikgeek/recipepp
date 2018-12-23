import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected  = new EventEmitter<RecipeModel>()

  recipes : RecipeModel[] = [
    new RecipeModel('Test Recipe',
    'A test recipe',
    'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*'),
    new RecipeModel('Test Recipe2',
    'A test',
    'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/howcuttingdo.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  OnRecipeSelected(recipe:RecipeModel){
    this.recipeSelected.emit(recipe);
  }
}
