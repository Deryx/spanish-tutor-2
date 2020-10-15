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
  showVocabularyOverlay: boolean = true;
  showForm: boolean = false;
  showReport: boolean = false;

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

  constructor( private vs: VocabularyService, private apollo: Apollo, private randomNumberService: RandomNumberGeneratorService, private router: Router ) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.wordSlides, 
      event.previousIndex, 
      event.currentIndex);
  }

  getOverlayData(data) {
    const numberCards = 5;
    if(!data.isVisible) {
      this.showOverlay = data.isVisible;
      this.showVocabularyOverlay = data.isVisible;
      this.showForm = true;

      const categoryObject = {
        query: this.vs.Category,
        variables: {
          category: parseInt(data.category)
        }
      };
      const dictionaryObject = {
        query: this.vs.Dictionary
      }
      const queryObject = (data.category) ? categoryObject : dictionaryObject;
      this.queryDictionary = this.apollo.watchQuery(queryObject)
        .valueChanges
        .subscribe( result => {
          const dictionaryData = JSON.parse(JSON.stringify(result.data));
          this.dictionary = (data.category) ? dictionaryData.category : dictionaryData.dictionary;
          this.dictionary = dictionaryData.category;
          this.numberSlides = data.numberQuestions;
          this.getQuestionSet( this.numberSlides, numberCards, this.dictionary.length );
          this.displaySlideSet( this.currentSlideSet );
        }, (error) => {
          console.log('there was an error sending the query', error);
        });
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
      this.showOverlay = true;
      score = Math.round( ( this.numberCorrect / ( this.numberSlides * 5 ) ) * 100 ); 

      this.report.title = 'Vocabulary Slider Report';
      this.report.scoreMessage = 'You scored ' + score + '%';
      this.report.headings = ['slide set', 'tile 1', 'tile 2', 'tile 3', 'tile 4', 'tile 5'];
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
