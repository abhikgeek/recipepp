import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  
  @Output() emitIngredient = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit() {
  }

  // This method will add an event which will add the object in shopping list componet
  OnAddIngredient(){
    const newIngredient: Ingredients = new Ingredients(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    // Emitting the data
    this.emitIngredient.emit(newIngredient);
  }
}
