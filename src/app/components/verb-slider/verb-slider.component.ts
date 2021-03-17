import { Component } from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

const JSONPath = require('jsonpath-plus');

@Component({
  selector: 'app-verb-slider',
  templateUrl: './verb-slider.component.html',
  styleUrls: ['./verb-slider.component.css']
})

export class VerbSliderComponent {
  showOverlay: boolean = true;
  showVerbOverlay: boolean = true;
  showForm: boolean = false;
  showReport: boolean = false;

  selectedCategory: string;
  infinitives: any;
  numberSlides: number;
  currentSlideSet: number = 0;
  numberCorrect: number = 0;

  infinitive: string = '';

  questionSet: any = {};
  slideSet: number[] = [];
  pronounCards: any[] = [];
  verbSlides: any = [];
  currentAnswers: any = [];
  answers: any = [];
  conjugations: any;
  verbs: any;
  tenseSelect: number;

  report: any = {};
  responses: any = [];

  private queryVerbs: Subscription;
  private queryVerb: Subscription;
  private queryConjugation: Subscription;

  constructor( private vs: VerbService, private randomNumberService: RandomNumberGeneratorService, private router: Router ) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.verbSlides, 
      event.previousIndex, 
      event.currentIndex);
  }

  getOverlayData(data) {
    if(!data.isVisible) {
      this.showOverlay = data.isVisible;
      this.showVerbOverlay = data.isVisible;
      this.showForm = true;
      this.numberSlides = data.numberVerbs;
      this.tenseSelect = data.tense;

      this.createQuestionSet();
    }
  }

  createQuestionSet = () => {
    this.vs.getVerbs()
    .subscribe( result => {
      const infinitiveData = JSON.parse( JSON.stringify(result) );
      this.infinitives = infinitiveData;

      this.getQuestionSet( this.numberSlides, this.infinitives.length );
      this.displaySlideSet( this.currentSlideSet );
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  getQuestionSet( numQuestions: number, maxNumber: number ) {
    const slideSet: number[] = [];
    for( let i = 0; i < numQuestions; i++ ) {
      this.randomNumberService.generateRandomNumberArray( numQuestions, maxNumber, slideSet );
    }

    this.questionSet = slideSet;
  }

  displaySlideSet( numberQuestion: number ) {
    const question = this.questionSet[numberQuestion];
    this.infinitive = this.infinitives[question].infinitive;
    this.getCurrentVerb( this.infinitives[question].id, this.tenseSelect );
  }

  getCurrentVerb = ( verb: number, tense: number ): void => {
    this.vs.getConjugations()
      .subscribe( result => {
        let scrambledSlides: any = [];
        const conjugationData = JSON.parse(JSON.stringify(result));
        const conjugations = conjugationData;
              
        let index: number = 0;
        while(index < conjugations.length) {
          let currentConjugation: any = conjugations[index];
          let currentVerb: number = parseInt( currentConjugation.verb );
          let currentTense: number = parseInt( currentConjugation.tense );
          if( currentVerb === verb && currentTense === parseInt( tense.toString() ) ) {
            this.currentAnswers.push(currentConjugation.yo);
            this.currentAnswers.push(currentConjugation.tu);
            this.currentAnswers.push(currentConjugation.el);
            this.currentAnswers.push(currentConjugation.nosotros);
            this.currentAnswers.push(currentConjugation.vosotros);
            this.currentAnswers.push(currentConjugation.ellos);
            
            break;
          }

          index++;
        }

        this.randomNumberService.generateRandomNumberArray( this.currentAnswers.length, this.currentAnswers.length, scrambledSlides );
        
        for(let i = 0; i < scrambledSlides.length; i++) {
          let scrambledSlide = scrambledSlides[i];
          this.verbSlides.push( this.currentAnswers[scrambledSlide] );
        }
        
        scrambledSlides = [];
        
        this.answers.push( this.currentAnswers );
        this.currentAnswers = [];
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  getNextSet() {
    this.verbSlides = [];
    let numberQuestions = Object.keys(this.questionSet).length;
    if( this.currentSlideSet < numberQuestions ) {
      this.currentSlideSet++;
      this.displaySlideSet( this.currentSlideSet );
    }
  }

  getAnswer() {
    const responseObj: any = {};
    let score: number = 0;

    const answer = this.answers[this.currentSlideSet];
    const response = this.verbSlides;
    for(let i = 0; i < response.length; i++) {
      console.log(answer[i], response[i]);
      if( answer[i] === response[i] ) this.numberCorrect++;
    }

    const answerObject: any = {};
    const answers: string[] = [];
    const responses: string[] = [];

    responseObj.slideSet = this.currentSlideSet + 1;
    responseObj.answers = this.answers[this.currentSlideSet];
    responseObj.responses = response;

    this.responses.push( responseObj );

    if( this.currentSlideSet === this.numberSlides - 1 ) {
      this.showForm = false;
      this.showReport = true;
      this.showOverlay = true;
      score = Math.round( ( this.numberCorrect / ( this.numberSlides * 5 ) ) * 100 ); 

      this.report.title = 'Verb Slider Report';
      this.report.scoreMessage = 'You scored ' + score + '%';
      this.report.headings = ['slide set', 'tile 1', 'tile 2', 'tile 3', 'tile 4', 'tile 5'];
      this.report.responses = this.responses;
    } else {
      this.getNextSet();
    }
  }

  reset() {
    this.numberCorrect = 0;
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
