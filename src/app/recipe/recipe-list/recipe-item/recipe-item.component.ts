import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : RecipeModel;

  // Recipe Model to be passed to recipe details component
  @Output() onRecipeEmit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  OnRecipeItemClick(){
    this.onRecipeEmit.emit();
  }
}
