import { Component, OnInit } from '@angular/core';
import { VocabularyCategories } from '../vocabulary-categories';
import { VocabularyService } from '../vocabulary.service';
import { VocabularyCategoriesService } from '../vocabulary-categories.service';
import { FlipAnimation } from '../../animations/flip.animation';

@Component({
  selector: 'app-vocabulary-flashcard',
  templateUrl: './vocabulary-flashcard.component.html',
  styleUrls: ['./vocabulary-flashcard.component.css'],
  providers: [VocabularyCategoriesService],
  animations: FlipAnimation.animations
})

export class VocabularyFlashcardComponent implements OnInit {
  flip = 'inactive';
  word: string = 'word';
  category: string;
  image: string;
  pronunciation: string = 'pronunciation';
  translation: string = '[ translation ]';
  categories = new VocabularyCategories();
  vocabularyCategory: any;
  index: number;
  dictionary: any;

  constructor( private words: VocabularyService, private vocabularyCategories: VocabularyCategoriesService ) { }

  ngOnInit() {
    this.words.getDictionary()
    .subscribe(
      data => {
        this.dictionary = data;
      },
      error => console.log('Error: ', error),
      () => {
        let categorySelect = document.getElementById( 'category' );
        let categoryOptions: string[] = this.vocabularyCategories.getCategories( this.dictionary );
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
    });
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
  
    let card = document.querySelector('.card');
    let cardFlipState = card.style.transform;
    if(cardFlipState === 'rotateX(180deg)') this.flip = 'inactive';
}

  flipCard() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
}
