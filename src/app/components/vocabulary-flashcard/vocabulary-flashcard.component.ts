import { Component, OnInit } from '@angular/core';
import { FlipAnimation } from '../../../animations/flip.animation';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { VocabularyService } from '../../services/vocabulary.service';
import { VocabularyCategoriesService } from '../../services/vocabulary-categories.service';
import { Vocabulary } from '../../vocabulary';

@Component({
  selector: 'app-vocabulary-flashcard',
  templateUrl: './vocabulary-flashcard.component.html',
  styleUrls: ['./vocabulary-flashcard.component.css'],
  animations: FlipAnimation.animations
})
export class VocabularyFlashcardComponent implements OnInit {
  flip = 'inactive';
  word: string = 'word';
  createdWord: Vocabulary;
  category: string;
  image: string;
  pronunciation: string = 'pronunciation';
  translation: string = '[ translation ]';
  categories: any;
  vocabularyCategory: any;
  index: number;
  dictionary: any;
  showImage: boolean = true;

  private queryCategories: Subscription;
  private queryWord: Subscription;
  private queryCategory: Subscription;
  private queryDictionary: Subscription;

  constructor( private vcs: VocabularyCategoriesService, private vs: VocabularyService ) { }

  ngOnInit(){
    this.getCategories();
  }

  setCategories = () => {
    let categorySelect = document.getElementById( 'category' );
    let firstOption = document.createElement( 'option' );
    firstOption.disabled = true;
    firstOption.selected = true;
    firstOption.label = 'SELECT A CATEGORY';
    categorySelect.appendChild( firstOption );

    let secondOption = document.createElement( 'option' );
    secondOption.label = 'All';
    categorySelect.appendChild( secondOption );

    for(let i = 0; i < this.categories.length; i++) {
      let category = this.categories[i];

      let option = document.createElement( 'option' );
      option.style.textTransform = "Capitalize";
      option.label = category['category'];
      option.value = category['id'];

      categorySelect.appendChild( option );
    }
  }

  getCategories = () => {
    this.vcs.getCategories()
    .subscribe(result => {
        const categoryData = JSON.parse(JSON.stringify(result));
        this.categories = categoryData.sort((a, b) => {
          const wordA = a.category;
          const wordB = b.category;

          let comparison = 0;
          if(wordA > wordB) {
            comparison = 1;
          } else if (wordA < wordB) {
            comparison = -1;
          }

          return comparison;
        });

        this.setCategories();
      });
  }

  changeCategory = () => {
    this.vs.getDictionary()
    .subscribe( result => {
      const dictionaryData = JSON.parse(JSON.stringify(result));
      this.dictionary = dictionaryData;
      const dictionaryLength = this.dictionary.length;
      const flashcardDictionary: any = [];

      if( this.category ) {
        let index: number = 0;

        while( index < dictionaryLength ) {
          let currentWord: any = this.dictionary[index];
          let currentCategory: number = parseInt( currentWord.category.toString() );
          const selectedCategory: number = parseInt( this.category.toString() );
          if( currentCategory === selectedCategory ) {
            flashcardDictionary.push( currentWord );
          }

          index++;
        }

        this.dictionary = flashcardDictionary;
      }
      console.log(this.dictionary);
      this.index = 0;
      this.word = this.dictionary[this.index].word;
      this.pronunciation = this.dictionary[this.index].pronunciation;
      this.translation = '[ ' + this.dictionary[this.index].translation + ' ]';
      this.image = this.dictionary[this.index].image;
      this.showImage = ( this.image === 'assets/images/blank.png' ) ? false : true;
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  next = () => {
    this.index++;
    this.word = this.dictionary[this.index].word;
    this.pronunciation = this.dictionary[this.index].pronunciation;
    this.translation = '[ ' + this.dictionary[this.index].translation + ' ]';
    this.image = this.dictionary[this.index].image;
    this.showImage = ( this.image === 'assets/images/blank.png' ) ? false : true;
  
    const card: any = document.querySelector('div.card');
    let cardFlipState = card.style.transform;
    if(cardFlipState === 'rotateX(180deg)') this.flip = 'inactive';
}

  flipCard = () => {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
}
