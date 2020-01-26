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
  numberQuestions: number = 0;
  translation: string = '';
  image: string = '';
  answer: string;
  incompleteWord: string[] = [];
  questionSet: number[] = [];
  currentWord = 0;
  numberCorrect = 0;

  report: any = {};
  responses: any = [];

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
            this.numberQuestions = data.numberQuestions;
            this.randomNumberService.generateRandomNumberArray(this.numberQuestions, this.dictionary.length, this.questionSet );
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
    }
  }

  getAnswer() {
    const responseObj: any = {};
    let score: number = 0;

    let response = this.incompleteWord.join('');
    if( this.answer === response ) this.numberCorrect++;

    responseObj.question = this.translation;
    responseObj.answer = this.answer;
    responseObj.response = response;
    this.responses.push( responseObj );

    if(this.currentWord === this.numberQuestions - 1) {
      this.showForm = false;
      this.showReport = true;
      this.showOverlay = true;
      score = Math.round( ( this.numberCorrect / this.numberQuestions ) * 100 ); 

      this.report.title = 'Vocabulary Completion Report';
      this.report.scoreMessage = 'You scored ' + score + '%';
      this.report.headings = ['word', 'answer', 'response'];
      this.report.responses = this.responses;
    } else {
      this.getNextQuestion();
    }
  }

  trackByFn(index: number, item: any) {
    return index;
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
