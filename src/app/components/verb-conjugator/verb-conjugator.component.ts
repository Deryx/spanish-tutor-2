import { Component } from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-verb-conjugator',
  templateUrl: './verb-conjugator.component.html',
  styleUrls: ['./verb-conjugator.component.css']
})
export class VerbConjugatorComponent {
  // showAccents: boolean = false;
  buttonText: string = 'show accents';
  animationState = 'left';

  showOverlay: boolean = true;
  showConjugatorOverlay: boolean = true;
  showForm: boolean = false;

  tenses = {
    'present': 0,
    'preterite': 1,
    'imperfect': 2,
    'future': 3
  };

  infinitives: any;
  verb: string;
  numberQuestions: number;
  tense: string;
  translation: string;
  questionSet: number[] = [];
  currentVerb = 0;
  currentAnswers: any = {};
  inputAnswers: any = {
    yo: '',
    tu: '',
    el: '',
    nosotros: '',
    els: ''
  };
  infinitive = '';

  numberCorrect: number = 0;

  answerReport: any = [];

  constructor( private verbs: VerbService, private randomNumberService: RandomNumberGeneratorService, private router: Router ) { }

  retrieveVerbs() {
    this.verbs.getVerbs()
    .subscribe(
      data => {
        this.infinitives = data;
        this.infinitives = this.infinitives.Items;
      },
      error => console.log('Error: ', error),
      () => {
        this.randomNumberService.generateRandomNumberArray(this.numberQuestions, this.infinitives.length, this.questionSet );
        this.getCurrentVerb( this.currentVerb, this.tense );
        delete this.currentAnswers._id;
      });
}

  getOverlayData(data) {
    if(!data.isVisible) {
      this.showOverlay = data.isVisible;
      this.showConjugatorOverlay = data.isVisible;
      this.showForm = true;
      this.tense = data.tense;
      this.numberQuestions = data.numberVerbs;

      this.retrieveVerbs();
    }
  }

  getCurrentVerb( verb: number, tense: string) {
    const currentVerb = this.questionSet[verb];
    this.infinitive = this.infinitives[currentVerb].infinitive;
    this.translation = '[ ' + this.infinitives[currentVerb].translation + ' ]';
    this.cloneConjugation( this.getConjugation( this.currentVerb, this.tense ) );
  }

  getConjugation( verb: number, tense: string): any {
    const currentVerb = this.questionSet[verb];

    let conjugation: any = this.tenses[tense];
    let conjugates: any = this.infinitives[currentVerb].conjugations[conjugation];
    delete conjugates.tense;
    delete conjugates._id;

    return conjugates;
  }

  cloneConjugation(conjugation: any) {
    return Object.assign( this.currentAnswers, conjugation );
  }

  getNextVerb() {
    let numberVerbs: number = this.questionSet.length;
    if( this.currentVerb < numberVerbs ) {
      this.currentVerb++;
      this.cloneConjugation({});
      this.getCurrentVerb( this.currentVerb, this.tense );
    } else {
      this.writeSummary();
    }
  }

  writeSummary() {

  }

  getAnswers() {
    const answerObject: any = {};
    const answers: any = Object.keys( this.currentAnswers );

    for( const answer of answers ) {
        if( this.currentAnswers[answer] === this.inputAnswers[answer] ) this.numberCorrect++;
    }

    answerObject.answers = {};
    Object.assign(answerObject.answers, this.currentAnswers);
    answerObject.responses = this.inputAnswers;
    answerObject.numberCorrect = this.numberCorrect;

    this.resetCurrentAnswers();

    this.numberCorrect = 0;

    this.getNextVerb();
  }

  resetCurrentAnswers() {
    const answers = Object.keys( this.currentAnswers );
    for(const answer of answers) {
      this.currentAnswers[answer] = '';
    }
  }

  toggleAccents() {
    this.animationState = this.animationState === 'left' ? 'right' : 'left';
    this.buttonText = this.animationState === 'left' ? 'show accents' : 'hide accents';
  }

  reset() {
    this.inputAnswers = {
      yo: '',
      tu: '',
      el: '',
      nosotros: '',
      els: ''
    };
    this.resetCurrentAnswers();
    this.retrieveVerbs();
    this.currentVerb = 0;
    this.numberCorrect = 0;
    this.getNextVerb();
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
