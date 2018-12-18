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

  translation: string = '';
  image: string = '';
  word: string = '';

  slideSets: any = {};
  translationSlides: any = [];
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
            this.setSlideSets(data.numberQuestions, numberCards, this.dictionary.length );
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
            this.setSlideSets( data.numberQuestions, numberCards, this.dictionary.length );
          }
        );
      }
    }
  }

  setSlideSets( numberSets: number, arrayLength: number, maxNumber: number ) {
    let slideSet: any = [];
    for( let i = 0; i < numberSets; i++) {
      this.randomNumberService.generateRandomNumberArray( arrayLength, maxNumber, slideSet );
      this.slideSets[i] = slideSet;
      slideSet = [];
    }
  }

  getTranslationCards() {

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
