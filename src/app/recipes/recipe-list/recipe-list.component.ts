import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Chicken Tikka Masala", "It's spicy", "https://upload.wikimedia.org/wikipedia/commons/1/13/Chicken_Tikka_Masala_Curry.png"),
    new Recipe("Chicken Tikka Masala", "It's spicy", "https://upload.wikimedia.org/wikipedia/commons/1/13/Chicken_Tikka_Masala_Curry.png")
  ];

  constructor() { }

  ngOnInit() {
  }

}
