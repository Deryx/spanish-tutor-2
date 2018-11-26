import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VocabularyCategories } from '../vocabulary-categories';

@Component({
  selector: 'app-vocabulary-overlay-form',
  templateUrl: './vocabulary-overlay-form.component.html',
  styleUrls: ['./vocabulary-overlay-form.component.css']
})

export class VocabularyOverlayFormComponent implements OnInit {
  isVisible: boolean = true;
  numberQuestions: number;
  category: string;
  categories = new VocabularyCategories();

  @Output() formChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    let categorySelect = document.getElementById( 'category' );
    let categoryOptions = this.categories.getCategories();
    categoryOptions.sort();

    let firstOption = document.createElement( 'option' );
    firstOption.value = '';
    firstOption.disabled = true;
    firstOption.selected = true;
    firstOption.innerHTML = 'SELECT A CATEGORY';
    categorySelect.appendChild( firstOption );

    for(let i = 0; i < categoryOptions.length; i++) {
      let category = categoryOptions[i];

      let option = document.createElement( 'option' );
      option.value = category;
      option.innerHTML = category.charAt(0).toUpperCase() + category.slice(1);

      categorySelect.appendChild( option );
    }
  }

  onClick() {
    let overlayData = {
      isVisible: !this.isVisible,
      numberQuestions: this.numberQuestions,
      category: this.category
    }

    this.formChange.emit( overlayData );
  }
}
