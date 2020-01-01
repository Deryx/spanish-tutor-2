import { Component } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";

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
  numberCorrect: number = 0;

  translation: string = '';
  image: string = '';
  word: string = '';

  questionSet: any = {};
  slideSet: number[] = [];
  translationCards: any[] = [];
  wordSlides: any = [];

  constructor( private words: VocabularyService, private randomNumberService: RandomNumberGeneratorService, private router: Router ) {}

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
            this.dictionary = this.dictionary.Items;
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
      card.answer = vocabulary[vocabularyId].word;

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
    const response = this.wordSlides;
    for(let i = 0; i < response.length; i++) {
      if( this.translationCards[i].answer === response[i] ) this.numberCorrect++;
    }

    const answerObject: any = {};
    const translations: string[] = [];
    const answers: string[] = [];
    for(let i = 0; i < this.translationCards.length; i++){
      translations.push( this.translationCards[i].translation);
      answers.push( this.translationCards[i].answer );
    }
    answerObject.translations = translations;
    answerObject.answers = answers;
    answerObject.response = response;
    answerObject.numberCorrect = this.numberCorrect;

    this.numberCorrect = 0;

    this.getNextSet();
  }

  writeSummary() {

  }

  reset() {

  }

  quit() {
    this.router.navigateByUrl('');
  }
}
