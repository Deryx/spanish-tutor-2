import { Component } from '@angular/core';
import { VerbService } from '../services/verb.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conjugator',
  templateUrl: './conjugator.component.html',
  styleUrls: ['./conjugator.component.css']
})
export class ConjugatorComponent {
  showOverlay: boolean = true;
  showConjugatorOverlay: boolean = true;
  showForm: boolean = false;
  showReport: boolean = false;
  fade: any;

  selectedTextbox: string;
  accent: string;

  infinitives: any;
  verb: string;
  verbs: any;
  conjugations: any;
  numberQuestions: number;
  numberAnswered: number = 0;
  tense: string;
  translation: string;
  selectedVerb: number;
  selectedTense: number;
  questionSet: number[] = [];
  currentVerb: number = 0;
  currentAnswers: any = {};
  correctAnswers: any = [];
  userAnswers: any = [];
  reportData: any = [];
  reportDatum: any = {};
  inputAnswers: any = {
    yo: '',
    tu: '',
    el: '',
    nosotros: '',
    vosotros: '',
    ellos: ''
  };
  infinitive = '';

  numberCorrect: number = 0;
  tenses = ['present', 'preterite', 'imperfect', 'conditional', 'future'];

  report: any = {};
  responses: any = [];

  private queryVerbs: Subscription;
  private queryVerb: Subscription;
  private queryTenses: Subscription;

  constructor( private vs: VerbService, private randomNumberService: RandomNumberGeneratorService, private router: Router ) { }

  getOverlayData = (data): void => {
    if(!data.isVisible) {
      this.selectedTense = data.tense;
      this.selectedVerb = data.verb;
      this.numberQuestions = parseInt( data.numberVerbs ) || 1;
      this.showOverlay = data.isVisible;
      this.showConjugatorOverlay = data.isVisible;
      this.showForm = true;
      this.tense = this.tenses[this.selectedTense - 1];

      this.retrieveVerbs();
    }
  }

  retrieveVerbs = (): void => {
    this.vs.getVerbs()
    .subscribe(results => {
        const verbData = JSON.parse(JSON.stringify(results));
        this.infinitives = verbData;

        if( this.selectedVerb ) {
          this.getCurrentVerb(parseInt( this.selectedVerb.toString() ), parseInt( this.selectedTense.toString() ) );

        } else {
          this.getRandomVerbs();
        }
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  getCurrentVerb = ( verb: number, tense: number ): void => {
    this.vs.getConjugations()
    .subscribe( result => {
      const conjugationData = JSON.parse(JSON.stringify(result));
      this.conjugations = conjugationData;
      this.getVerbInfo( verb, tense );

      let currentInfinitive: number;
      if( this.selectedVerb ) {
        currentInfinitive = parseInt( this.selectedVerb.toString() );
      } else {
        const currentVerb: number = this.questionSet[this.currentVerb];
        currentInfinitive = parseInt ( verb.toString() );
      }

      let currentConjugations: any = this.conjugations.filter( conjugation => parseInt( conjugation.verb.toString() ) === parseInt( currentInfinitive.toString() ) && parseInt( conjugation.tense.toString() ) === parseInt( tense.toString() ) );

      this.reportDatum.answers = currentConjugations[0];
      
      this.fade = this.fade === 'in' ? 'out' : 'in';
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  getVerbInfo = ( verb: number, tense: number ): void => {
    let index: number = 0;
    while(index < this.infinitives.length) {
      let currentVerb: any = this.infinitives[index];
      if(currentVerb.id === verb) {
        this.infinitive = currentVerb.infinitive;
        this.translation = '[ ' + currentVerb.translation + ' ]';
        this.reportDatum = {};
        this.reportDatum.verb = this.infinitive;
        this.reportDatum.translation = this.translation;

        break;
      }

      index++;
    }
  }

  getRandomVerbs = (): void => {
    this.randomNumberService.generateRandomNumberArray(this.numberQuestions, this.infinitives.length, this.questionSet );
    let question = this.questionSet[this.currentVerb];
    this.getCurrentVerb( question, parseInt( this.selectedTense.toString() ) );
  }

  getNextVerb = (): void => {
    if( this.currentVerb < this.numberQuestions ) {
      this.currentVerb++;
      this.resetInputAnswers();
      this.getCurrentVerb( this.questionSet[this.currentVerb], parseInt( this.selectedTense.toString() ) );
    } 
  }

  getAnswers = (): void => {
    const userAnswers = {
      yo: this.inputAnswers.yo || 'N/A',
      tu: this.inputAnswers.tu || 'N/A',
      el: this.inputAnswers.el || 'N/A',
      nosotros: this.inputAnswers.nosotros || 'N/A',
      vosotros: this.inputAnswers.vosotros || 'N/A',
      ellos: this.inputAnswers.ellos || 'N/A'
    }
    this.reportDatum.userAnswers = userAnswers;
    this.reportData.push(this.reportDatum);

    if(this.numberAnswered < this.numberQuestions - 1) {
      this.getNextVerb();
      this.resetCurrentAnswers();
      this.numberAnswered++;
    } else {
      this.createReport();
    }
  }

  createReport = (): void => {
    this.showForm = false;
    this.showReport = true;
    this.showOverlay = true;

    for(let i = 0; i < this.numberQuestions; i++) {
      if (this.reportData[i]['answers'].yo === this.reportData[i]['userAnswers'].yo) this.numberCorrect++;
      if (this.reportData[i]['answers'].tu === this.reportData[i]['userAnswers'].tu) this.numberCorrect++;
      if (this.reportData[i]['answers'].el === this.reportData[i]['userAnswers'].el) this.numberCorrect++;
      if (this.reportData[i]['answers'].nosotros === this.reportData[i]['userAnswers'].nosotros) this.numberCorrect++;
      if (this.reportData[i]['answers'].vosotros === this.reportData[i]['userAnswers'].vosotros) this.numberCorrect++;
      if (this.reportData[i]['answers'].ellos === this.reportData[i]['userAnswers'].ellos) this.numberCorrect++;
    }

    this.report.score = Math.round( ( this.numberCorrect / ( this.numberQuestions * 6 ) ) * 100 ); 
    this.report.correctAnswers = this.numberCorrect;
    this.report.numberQuestions = this.numberQuestions * 6;
    this.report.title = 'Verb Conjugator Report';
    this.report.headings = ['infinitive', 'yo', 'tu', 'el', 'nosotros', 'vosotros', 'ellos'];
    this.report.reportData = this.reportData;
  }

  resetCurrentAnswers = (): void => {
    const answers = Object.keys( this.currentAnswers );
    for(const answer of answers) {
      this.currentAnswers[answer] = '';
    }
  }

  resetInputAnswers = (): void => {
    this.inputAnswers = {
      yo: '',
      tu: '',
      el: '',
      nosotros: '',
      vosotros: '',
      ellos: ''
    };
  }
  
  getSelectedTextbox = (textboxID): void => {
    this.selectedTextbox = textboxID;
  }

  placeAccent = (event): void => {
    let selectedTextbox = <HTMLInputElement>document.getElementById(this.selectedTextbox);

    this.accent = event;

    let currentPosition = selectedTextbox.selectionStart;
    let originalValue = selectedTextbox.value;
    let newValue = originalValue.substring(0, currentPosition) + this.accent + originalValue.substring(currentPosition);
    selectedTextbox.value = newValue;
  }

  reset = (): void => {
    this.resetCurrentAnswers();
    this.currentVerb = 0;
    this.numberCorrect = 0;
    this.getNextVerb();
  }

  quit = (): void => {
    this.router.navigateByUrl('');
  }
}