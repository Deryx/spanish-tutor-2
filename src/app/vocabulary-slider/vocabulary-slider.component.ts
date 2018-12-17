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

  translationSlides: any = [];
  wordSlides: any = [];

  constructor( private words: VocabularyService, private randomNumberService: RandomNumberGeneratorService ) {}

  getOverlayData(data) {
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
            this.randomNumberService.generateRandomNumberArray(data.numberQuestions, this.dictionary.length, [] );
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
            this.randomNumberService.generateRandomNumberArray(data.numberQuestions, this.dictionary.length, [] );
          }
        );
      }
    }
  }

  getTranslationSlides() {

  }

  getAnswerSlides() {

  }

  getNextSlides() {

  }

  reset() {
  }

  quit() {

  }
}
