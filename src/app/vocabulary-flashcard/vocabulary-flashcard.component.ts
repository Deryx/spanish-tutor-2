import { Component, OnInit } from '@angular/core';
import { VocabularyCategories } from '../vocabulary-categories';
import { VocabularyService } from '../vocabulary.service';

@Component({
  selector: 'app-vocabulary-flashcard',
  templateUrl: './vocabulary-flashcard.component.html',
  styleUrls: ['./vocabulary-flashcard.component.css']
})
export class VocabularyFlashcardComponent implements OnInit {
  word: string = 'word';
  category: string;
  image: string;
  pronunciation: string = 'pronunciation';
  translation: string = '[ translation ]';
  categories = new VocabularyCategories();
  vocabularyCategory: any;
  index: number;

  constructor( private words: VocabularyService ) { }

  ngOnInit() {
    let categorySelect = document.getElementById( 'category' );
    let categoryOptions = this.categories.getCategories();
    categoryOptions.sort();

    let firstOption = document.createElement( 'option' );
    firstOption.value = '';
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

  changeCategory(){
    return this.words.getCategory( this.category )
      .subscribe(
        data => {
          this.vocabularyCategory = data;
          this.index = 0;
          this.word = this.vocabularyCategory[this.index].word;
          this.pronunciation = this.vocabularyCategory[this.index].pronunciation;
          this.translation = '[ ' + this.vocabularyCategory[this.index].translation + ' ]';
          this.image = this.vocabularyCategory[this.index].image;
        }
      )
  }

  next() {
    this.index++;
    this.word = this.vocabularyCategory[this.index].word;
    this.pronunciation = this.vocabularyCategory[this.index].pronunciation;
    this.translation = '[ ' + this.vocabularyCategory[this.index].translation + ' ]';
    this.image = this.vocabularyCategory[this.index].image;
  }
}
