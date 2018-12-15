import { Component } from '@angular/core';
import { VerbService } from '../verb.service';
import { RandomNumberGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-verb-conjugator',
  templateUrl: './verb-conjugator.component.html',
  styleUrls: ['./verb-conjugator.component.css']
})
export class VerbConjugatorComponent {
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
    ellos: ''
  };
  infinitive = '';

  numberCorrect: number = 0;

  constructor( private verbs: VerbService, private randomNumberService: RandomNumberGeneratorService ) { }

  getOverlayData(data) {
    if(!data.isVisible) {
      this.showOverlay = data.isVisible;
      this.showConjugatorOverlay = data.isVisible;
      this.showForm = true;
      this.tense = data.tense;
      this.numberQuestions = data.numberVerbs;

      this.verbs.getVerbs()
        .subscribe(
          data => {
            this.infinitives = data;
          },
          error => console.log('Error: ', error),
          () => {
            this.randomNumberService.generateRandomNumberArray(this.numberQuestions, this.infinitives.length, this.questionSet );
            this.getCurrentVerb( this.currentVerb, this.tense );
            this.cloneConjugation( this.getConjugation( this.currentVerb, this.tense ) );
            delete this.currentAnswers._id;
          });
    }
  }

  getCurrentVerb( verb: number, tense: string) {
    this.infinitive = this.infinitives[verb].infinitive;
    this.translation = '[ ' + this.infinitives[verb].translation + ' ]';
    this.getConjugation( verb, tense );
  }

  getConjugation( verb: number, tense: string): any {
    let conjugation: any = this.tenses[tense];
    let conjugates: any = this.infinitives[verb].conjugations[conjugation];
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
      this.getCurrentVerb( this.currentVerb, this.tense );
    } else {
      this.writeSummary();
    }
  }

  writeSummary() {

  }

  getAnswers() {
    const answers: any = Object.keys( this.currentAnswers );
    for( const answer of answers ) {
        if( this.currentAnswers[answer] === this.inputAnswers[answer] ) this.numberCorrect++;
    }
    this.resetCurrentAnswers();

    this.getNextVerb();
  }

  resetCurrentAnswers() {
    const answers = Object.keys( this.currentAnswers );
    for(const answer of answers) {
      this.currentAnswers[answer] = '';
    }
  }
}
