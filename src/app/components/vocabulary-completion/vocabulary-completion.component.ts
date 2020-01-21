import { Component } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-vocabulary-completion',
  templateUrl: './vocabulary-completion.component.html',
  styleUrls: ['./vocabulary-completion.component.css']
})
export class VocabularyCompletionComponent {
  animationState = 'left';
  buttonText: string = 'show accents';

  showOverlay: boolean = true;
  showVocabularyOverlay: boolean = true;
  showForm: boolean = false;
  showReport: boolean = false;

  dictionary: any;
  translation: string = '';
  image: string = '';
  answer: string;
  incompleteWord: string[] = [];
  questionSet: number[] = [];
  currentWord = 0;
  numberCorrect = 0;

  answerReport: any = [];

  constructor( private words: VocabularyService, private randomNumberService: RandomNumberGeneratorService, private router: Router ) {}
  
  getOverlayData(data) {
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
            this.randomNumberService.generateRandomNumberArray(data.numberQuestions, this.dictionary.length, this.questionSet );
            this.getCurrentWord( this.currentWord );
          }
        );
    }
  }

  getCurrentWord( word: number ) {
    let currentWord = this.questionSet[word];

    this.translation = this.dictionary[currentWord].translation;
    this.image = this.dictionary[currentWord].image;
    this.answer = this.dictionary[currentWord].word;
    this.createIncompleteWord( this.answer );
  }

  createIncompleteWord( word: string ) {
    const BLANK = '';
    const BLANK_PERCENTAGE = 0.50;

    let numberBlanks = Math.ceil( word.length * BLANK_PERCENTAGE );
    let wordArray: string[] = [];
    let incompleteArray: number[] = [];

    wordArray = word.split('');
    this.randomNumberService.generateRandomNumberArray(numberBlanks, word.length, incompleteArray);
    for(let i = 0; i < incompleteArray.length; i++) {
      let blankSpace = incompleteArray[i];
      wordArray[blankSpace] = BLANK;
    }

    this.incompleteWord = wordArray.slice(0);
  }

  getNextQuestion() {
    let numberQuestions = this.questionSet.length;
    if( this.currentWord < numberQuestions ) {
      this.currentWord++;
      this.getCurrentWord( this.currentWord );
    } else {
      this.writeSummary();
    }
  }

  getAnswer() {
    const answerObject: any = {};

    let response = this.incompleteWord.join('');
    if( this.answer === response ) this.numberCorrect++;

    answerObject.answer = this.answer;
    answerObject.response = response;
    this.answerReport.push( answerObject );

    this.getNextQuestion();
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  writeSummary() {

  }

  reset() {
    this.answer = '';
    this.currentWord = 0;
    this.numberCorrect = 0;
    this.getNextQuestion();
  }

  quit() {
    this.router.navigateByUrl('');
  }

  toggleAccents() {
    this.animationState = this.animationState === 'left' ? 'right' : 'left';
    this.buttonText = this.animationState === 'left' ? 'show accents' : 'hide accents';
  }
}
