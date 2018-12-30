import { Component } from '@angular/core';
import { VocabularyService } from '../vocabulary.service';
import { RandomNumberGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-vocabulary-completion',
  templateUrl: './vocabulary-completion.component.html',
  styleUrls: ['./vocabulary-completion.component.css']
})
export class VocabularyCompletionComponent {
  showOverlay: boolean = true;
  showVocabularyOverlay: boolean = true;
  showForm: boolean = false;

  dictionary: any;
  translation: string = '';
  image: string = '';
  answer: string;
  incompleteWord: string[] = [];
  questionSet: number[] = [];
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
    const userAnswer = this.incompleteWord.join('');
    console.log(userAnswer);
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

  }
}
