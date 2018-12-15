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
  answer: string;
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

      if(data.category) {
        this.words.getCategory(data.category)
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
      } else {
        this.words.getDictionary()
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
  }

  getCurrentWord( word: number ) {
    let wordArray: string[] = [];
    let scrambledArray: number[] = [];
    let currentWord = this.questionSet[word];
    this.answer = this.dictionary[currentWord].word;
    wordArray = this.answer.split('');
    this.randomNumberService.generateRandomNumberArray(wordArray.length, wordArray.length, scrambledArray);
    let scrambledWord: string[] = [];
    for(let i = 0; i < wordArray.length; i++) {
      scrambledWord.push(wordArray[scrambledArray[i]]);
    }
    console.log(wordArray, scrambledWord);
  }


}
