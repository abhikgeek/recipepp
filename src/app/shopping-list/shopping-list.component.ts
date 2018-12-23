import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[]  = [
    new Ingredients('Test',10),
    new Ingredients('Apple',12),
    new Ingredients('Tomatos',10),
    new Ingredients('Chillis',100),
  ];

  constructor() { }

  ngOnInit() {
  }

  OnIngredientAdded(ingre:Ingredients){
    this.ingredients.push(ingre);
  }
}
