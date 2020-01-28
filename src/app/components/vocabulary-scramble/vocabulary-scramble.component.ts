import { Component } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Router } from "@angular/router";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-vocabulary-scramble',
  templateUrl: './vocabulary-scramble.component.html',
  styleUrls: ['./vocabulary-scramble.component.css']
})
export class VocabularyScrambleComponent {
  showOverlay: boolean = true;
  showVocabularyOverlay: boolean = true;
  showForm: boolean = false;
  showReport: boolean = false;

  dictionary: any;
  numberQuestions: number = 0;
  word: string = '';
  translation: string = '';
  image: string = '';
  answer: string;
  scrambledWord: string[] = [];
  scrambleAnswer: string;
  answers: string[] = [];
  questionSet: number[] = [];
  answerSet: number[] = [];
  currentWord = 0;
  numberCorrect = 0;

  report: any = {};
  responses: any = [];

  constructor( private words: VocabularyService, private randomNumberService: RandomNumberGeneratorService, private router: Router ) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.scrambledWord, 
      event.previousIndex, 
      event.currentIndex);
  }

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
    this.createScramble( this.answer );
  }

  createScramble( word: string ) {
    let wordArray: string[] = [];
    let scrambledArray: number[] = [];

    wordArray = word.split('');
    this.randomNumberService.generateRandomNumberArray(wordArray.length, wordArray.length, scrambledArray);
    for(let i = 0; i < wordArray.length; i++) {
      this.scrambledWord.push(wordArray[scrambledArray[i]]);
    }
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

    const response = this.scrambledWord.join('');
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

      this.report.title = 'Vocabulary Scramble Report';
      this.report.scoreMessage = 'You scored ' + score + '%';
      this.report.headings = ['word', 'answer', 'response'];
      this.report.responses = this.responses;
    } else {
      this.scrambledWord = [];
      this.getNextQuestion();
      }
  }

  reset() {
    this.answer = '';
    this.scrambledWord = [];
    this.numberCorrect = 0;
    this.getCurrentWord( this.currentWord );
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
