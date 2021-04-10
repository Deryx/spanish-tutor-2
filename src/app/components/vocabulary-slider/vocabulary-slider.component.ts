import { Component } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { ApolloModule, Apollo } from 'apollo-angular';

@Component({
  selector: 'app-vocabulary-slider',
  templateUrl: './vocabulary-slider.component.html',
  styleUrls: ['./vocabulary-slider.component.css']
})
export class VocabularySliderComponent {
  showOverlay: boolean = true;
  showLongOverlay: boolean = false;
  showVocabularyOverlay: boolean = true;
  showForm: boolean = false;
  showReport: boolean = false;

  selectedCategory: string;
  dictionary: any;
  numberSlides: number = 0;
  currentSlideSet: number = 0;
  numberCorrect: number = 0;

  translation: string = '';
  image: string = '';
  word: string = '';

  questionSet: any = {};
  slideSet: number[] = [];
  translationCards: any[] = [];
  wordSlides: any = [];

  report: any = {};
  responses: any = [];

  private queryDictionary: Subscription;

  constructor( private vs: VocabularyService, private randomNumberService: RandomNumberGeneratorService, private router: Router ) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.wordSlides, 
      event.previousIndex, 
      event.currentIndex);
  }

  getOverlayData(data) {
    if(!data.isVisible) {
      this.showOverlay = data.isVisible;
      this.showVocabularyOverlay = data.isVisible;
      this.showForm = true;
      this.selectedCategory = data.category;
      this.numberSlides = data.numberQuestions;

      this.createQuestionSet();
    }
  }

  createQuestionSet = () => {
    const numberCards = 5;
    this.vs.getDictionary()
      .subscribe( result => {
        this.dictionary = JSON.parse(JSON.stringify(result));
        console.log('dictionary', this.dictionary);
        let questionDictionary: any;
        const dictionaryLength = this.dictionary.length;
        let categoryDictionary: any = [];
        if( this.selectedCategory ) {
          categoryDictionary = this.dictionary.filter( word => ( word.category === parseInt( this.selectedCategory.toString() ) ) );
          console.log('category dictionary', categoryDictionary);
          this.dictionary = categoryDictionary;
        }

        this.getQuestionSet( this.numberSlides, numberCards, this.dictionary.length );
        this.displaySlideSet( this.currentSlideSet );;
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
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
    if( this.currentSlideSet < numberQuestions ) {
      this.currentSlideSet++;
      this.displaySlideSet( this.currentSlideSet );
    }
  }

  getAnswer() {
    const responseObj: any = {};
    let score: number = 0;

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
    responseObj.slideSet = this.currentSlideSet + 1;
    responseObj.translations = translations;
    responseObj.answers = response;

    this.responses.push( responseObj );

    if( this.currentSlideSet === this.numberSlides - 1 ) {
      this.showForm = false;
      this.showReport = true;
      this.showOverlay = this.numberSlides === 1;
      this.showLongOverlay = this.numberSlides > 1;
      score = Math.round( ( this.numberCorrect / ( this.numberSlides * 6 ) ) * 100 ); 

      this.report.title = 'Vocabulary Slider Report';
      this.report.scoreMessage = 'You scored ' + score + '%';

      this.report.headings = ['slide set'];
      for( let i = 0; i < this.numberSlides; i++ ) {
        let heading = 'tile ' + i + 1;
        this.report.headings.push( heading );
      }

      this.report.responses = this.responses;
    } else {
      this.getNextSet();
    }
  }

  reset() {
    this.numberCorrect = 0;
    this.wordSlides = this.getWordSliders( this.questionSet[this.currentSlideSet], this.dictionary);
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
