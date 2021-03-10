import { Component } from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { ApolloModule, Apollo } from 'apollo-angular';

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

  constructor( private vs: VerbService, private apollo: Apollo, private randomNumberService: RandomNumberGeneratorService, private router: Router ) {}

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
    this.queryVerbs = this.apollo.watchQuery({
      query: this.vs.Verbs
    })
    .valueChanges
    .subscribe( result => {
      const infinitivesData = JSON.parse( JSON.stringify(result.data) );
      this.verbs = infinitivesData.verbs;
      console.log(this.verbs);

      this.getQuestionSet( this.numberSlides, this.verbs.length );
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
    this.infinitive = this.verbs[question].infinitive;
    this.getCurrentVerb( this.verbs[question].id, this.tenseSelect );
  }

  getCurrentVerb = ( verb: number, tense: number ): void => {
    this.queryVerb = this.apollo.watchQuery<any>({
      query: this.vs.Conjugation,
      variables: {
        verb: parseInt( verb.toString() ),
        tense: parseInt( tense.toString() )
      }
    })
      .valueChanges
      .subscribe( result => {
        let scrambledSlides: any = [];
        const conjugationData = JSON.parse(JSON.stringify(result.data));
        const conjugations = conjugationData.conjugation;
        
        this.currentAnswers.push(conjugations[0].yo);
        this.currentAnswers.push(conjugations[0].tu);
        this.currentAnswers.push(conjugations[0].el);
        this.currentAnswers.push(conjugations[0].nosotros);
        this.currentAnswers.push(conjugations[0].vosotros);
        this.currentAnswers.push(conjugations[0].els);
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
