import { Component } from '@angular/core';
import { VerbService } from '../services/verb.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-verb-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class VerbSliderComponent {
  showOverlay: boolean = true;
  showVerbOverlay: boolean = true;
  showForm: boolean = false;
  showReport: boolean = false;

  infinitives: any;
  numberSlides: number = 0;
  currentSlideSet: number = 0;
  numberCorrect: number = 0;

  infinitive: string = '';

  questionSet: any = [];
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
    const numberCards = 6;

    this.vs.getVerbs()
    .subscribe( result => {
      const infinitiveData = JSON.parse( JSON.stringify(result) );
      this.infinitives = infinitiveData;
      const infinitivesLength = this.infinitives.length;

      this.getQuestionSet( this.numberSlides, infinitivesLength );
      this.displaySlideSet( this.currentSlideSet );
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  getQuestionSet( numQuestions: number, maxNumber: number ) {
    let slideSet: number[] = [];

    this.randomNumberService.generateRandomNumberArray( numQuestions, maxNumber, slideSet );

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

        this.currentAnswers = conjugations.find( conjugation => ( parseInt( conjugation.verb ) === parseInt( verb.toString() ) && parseInt( conjugation.tense ) === parseInt( tense.toString() ) ) );
        
        const answers: any = [];
        answers.push( this.currentAnswers.yo );
        answers.push( this.currentAnswers.tu );
        answers.push( this.currentAnswers.el );
        answers.push( this.currentAnswers.nosotros );
        answers.push( this.currentAnswers.vosotros );
        answers.push( this.currentAnswers.ellos );
              
        this.randomNumberService.generateRandomNumberArray( answers.length, answers.length, scrambledSlides );
        
        for(let i = 0; i < scrambledSlides.length; i++) {
          let scrambledSlide = scrambledSlides[i];
          this.verbSlides.push( answers[scrambledSlide] );
        }
        
        scrambledSlides = [];
        
        this.answers.push( answers );
        this.currentAnswers = [];
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  getNextSet() {
    this.verbSlides = [];
    this.currentSlideSet++;
    if( this.currentSlideSet < this.numberSlides ) {
      this.displaySlideSet( this.currentSlideSet );
    }
  }

  getAnswer() {
    const responseObj: any = {};
    let score: number = 0;

    const answer = this.answers[this.currentSlideSet];
    const response = this.verbSlides;
    for(let i = 0; i < response.length; i++) {
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
      score = Math.round( ( this.numberCorrect / ( this.numberSlides * 6 ) ) * 100 ); 

      this.report.title = 'Verb Slider Report';
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
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
