import { Component } from '@angular/core';
import { VocabularyService } from '../vocabulary.service';
import { RandomNumberGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-vocabulary-slider',
  templateUrl: './vocabulary-slider.component.html',
  styleUrls: ['./vocabulary-slider.component.css']
})
export class VocabularySliderComponent {
  showOverlay: boolean = true;
  showVocabularyOverlay: boolean = true;
  showForm: boolean = false;

  dictionary: any;
  setNumber: number = 0;

  translation: string = '';
  image: string = '';
  word: string = '';

  slideSet: number[] = [];
  translationCards: any[] = [];
  wordSlides: any = [];

  constructor( private words: VocabularyService, private randomNumberService: RandomNumberGeneratorService ) {}

  getOverlayData(data) {
    const numberCards = 5;
    if(!data.isVisible) {
      this.showOverlay = data.isVisible;
      this.showVocabularyOverlay = data.isVisible;
      this.showForm = true;

      if(data.category) {
        this.words.getCategory(data.category)
        .subscribe(
          data => {
            this.dictionary = data;
          },
          error => console.log('Error: ', error),
          () => {
            this.randomNumberService.generateRandomNumberArray( numberCards, this.dictionary.length, this.slideSet );
            console.log(this.slideSet);
            this.translationCards = this.getTranslationCards( this.slideSet, this.dictionary );
          }
        );
      } else {
        this.words.getDictionary()
        .subscribe(
          data => {
            this.dictionary = data;
          },
          error => console.log('Error: ', error),
          () => {
            
          }
        );
      }
    }
  }

  getTranslationCards( cardSet: number[], vocabulary: any ): any[] {
    let card: any = {};
    let cards: any = [];

    for( let i = 0; i < cardSet.length; i++) {
      let vocabularyId = cardSet[i];
      card.translation = vocabulary[vocabularyId].translation;
      card.image = vocabulary[vocabularyId].image;

      (function(index) {
        cards[index] = card;
      })(i);

      card = {};
    };

    console.log(cards);

    return cards;
  }

  getWordSliders() {

  }

  getNextSet() {

  }

  reset() {

  }

  quit() {

  }
}
