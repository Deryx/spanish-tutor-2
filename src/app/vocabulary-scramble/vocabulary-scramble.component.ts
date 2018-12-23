import { Component } from '@angular/core';
import { VocabularyService } from '../vocabulary.service';
import { RandomNumberGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-vocabulary-scramble',
  templateUrl: './vocabulary-scramble.component.html',
  styleUrls: ['./vocabulary-scramble.component.css']
})
export class VocabularyScrambleComponent {
  showOverlay: boolean = true;
  showVocabularyOverlay: boolean = true;
  showForm: boolean = false;

  dictionary: any;
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

  constructor( private words: VocabularyService, private randomNumberService: RandomNumberGeneratorService ) {}

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
    } else {
      this.writeSummary();
    }
  }

  getAnswer() {
    this.scrambledWord = [];
    this.getNextQuestion();
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

  }
}
