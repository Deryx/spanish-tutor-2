import { Component } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-vocabulary-quiz',
  templateUrl: './vocabulary-quiz.component.html',
  styleUrls: ['./vocabulary-quiz.component.css']
})

export class VocabularyQuizComponent {
  showOverlay: boolean = true;
  showVocabularyOverlay: boolean = true;
  showForm: boolean = false;

  dictionary: any;
  word: string = '';
  answer: string;
  quizAnswer: string;
  answers: string[] = [];
  questionSet: number[] = [];
  answerSet: number[] = [];
  currentQuestion = 0;
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
          },
          error => console.log('Error: ', error),
          () => {
            this.randomNumberService.generateRandomNumberArray(data.numberQuestions, this.dictionary.length, this.questionSet );
            this.getCurrentQuestion( this.currentQuestion );
          }
        );
    }
  }

  getCurrentQuestion( question: number ) {
    let currentWord = this.questionSet[question];
    this.word = this.dictionary[currentWord].word;
    this.answer = this.dictionary[currentWord].translation;
    this.answerSet = [];
    this.answerSet.push( currentWord );
    this.randomNumberService.generateRandomNumberArray(undefined, this.dictionary.length, this.answerSet );
    this.answers = this.answerSet.map( (answer) => this.dictionary[answer].translation );
    this.answers.sort();
  }

  getNextQuestion() {
    let numberQuestions = this.questionSet.length;
    if( this.currentQuestion < numberQuestions ) {
      this.currentQuestion++;
      this.getCurrentQuestion( this.currentQuestion );
    } else {
      this.writeSummary();
    }
  }

  getAnswer() {
    let response = this.quizAnswer;
    if(response === this.answer) this.numberCorrect++;
    
    const answerObject: any = {};
    answerObject.word = this.word;
    answerObject.answer = this.answer;
    answerObject.response = response;

    this.quizAnswer = '';

    this.getNextQuestion();
  }

  writeSummary() {

  }

  reset() {
    this.answer = '';
    this.currentQuestion = 0;
    this.numberCorrect = 0;
    this.getNextQuestion();
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
