import { Component } from '@angular/core';
import { VocabularyService } from '../vocabulary.service';
import { RandomNumberGeneratorService } from '../random-number-generator.service';
import { Observable } from 'rxjs/Observable';

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
  currentQuestion: number = 0;

  translation: string = '';
  image: string = '';
  word: string = '';

  questionSet: any = {};
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

      const dataCommand: any = data.category ? this.words.getCategory( data.category ) : this.words.getDictionary();
      dataCommand
      .subscribe(
          data => {
            this.dictionary = data;
          },
          error => console.log('Error: ', error),
          () => {
            this.getQuestionSet( data.numberQuestions, numberCards, this.dictionary.length );
            this.displaySlideSet( this.currentQuestion );
          }
        );
      }
  }

  getQuestionSet( numQuestions: number, setSize: number, maxNumber: number ) {
    for( let i = 0; i < numQuestions; i++ ) {
      let slideSet: number[] = [];
      this.randomNumberService.generateRandomNumberArray( setSize, maxNumber, slideSet );
      this.questionSet[i] = slideSet;
    }
  }

  displaySlideSet( numberQuestion: number ) {
    this.translationCards = this.getTranslationCards( this.questionSet[numberQuestion], this.dictionary);
    this.wordSlides = this.getWordSliders( this.questionSet[numberQuestion], this.dictionary);
  }

  getTranslationCards( cardSet: number[], vocabulary: any ): any[] {
    let cards: any = [];

    for( let i = 0; i < cardSet.length; i++) {
      let card: any = {};
      let vocabularyId = cardSet[i];
      card.translation = vocabulary[vocabularyId].translation;
      card.image = vocabulary[vocabularyId].image;

      (function(index) {
        cards[index] = card;
      })(i);
    };

    return cards;
  }

  getWordSliders( cardSet: number[], vocabulary: any ): any {
    let sliders: any = [];
    let words: any = [];
    let wordSliders: any = [];

    this.randomNumberService.generateRandomNumberArray( cardSet.length, cardSet.length, sliders );
    for( let i = 0; i < sliders.length; i++) {
      let sliderIndex = sliders[i];
      words[i] = cardSet[sliderIndex];
    }

    for( let i = 0; i < words.length; i++) {
      let vocabularyId = words[i];

      (function(index) {
        wordSliders[index] = vocabulary[vocabularyId].word;
      })(i);
    }

    return wordSliders;
  }

  getNextSet() {
    let numberQuestions = Object.keys(this.questionSet).length;
    if( this.currentQuestion < numberQuestions ) {
      this.currentQuestion++;
      this.displaySlideSet( this.currentQuestion );
    } else {
      this.writeSummary();
    }
  }

  getAnswer() {
    this.getNextSet();
  }

  writeSummary() {

  }

  reset() {

  }

  quit() {

  }
}
