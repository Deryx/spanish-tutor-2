import { Component } from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { RandomNumberGeneratorService } from '../../services/random-number-generator.service';
import { Router } from "@angular/router";
import { ApolloModule, Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import gql from 'graphql-tag';

@Component({
  selector: 'app-verb-conjugator',
  templateUrl: './verb-conjugator.component.html',
  styleUrls: ['./verb-conjugator.component.css']
})
export class VerbConjugatorComponent {
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
  numberQuestions: number = 1;
  numberAnswered: number = 0;
  tense: string;
  translation: string;
  selectedVerb: number;
  selectedTense: number;
  questionSet: number[] = [];
  currentVerb = 0;
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
    els: ''
  };
  infinitive = '';

  numberCorrect: number = 0;
  tenses = ['present', 'preterite', 'imperfect', 'future', 'conditional'];

  report: any = {};
  responses: any = [];

  private queryVerbs: Subscription;
  private queryVerb: Subscription;
  private queryTenses: Subscription;

  constructor( private vs: VerbService, private randomNumberService: RandomNumberGeneratorService, private router: Router, private apollo: Apollo ) { }

  getOverlayData(data) {
    if(!data.isVisible) {
      this.selectedTense = data.tense;
      this.selectedVerb = data.verb;
      this.showOverlay = data.isVisible;
      this.showConjugatorOverlay = data.isVisible;
      this.showForm = true;
      this.tense = this.tenses[this.selectedTense - 1];

      this.queryVerbs = this.apollo.watchQuery<any>({
        query: this.vs.Verbs
      })
        .valueChanges
        .subscribe(result => {
          const verbData = JSON.parse(JSON.stringify(result.data));
          this.infinitives = verbData.verbs.sort((a, b) => {
          const verbA = a.infinitive;
          const verbB = b.infinitive;
  
          let comparison = 0;
          if(verbA > verbB) {
            comparison = 1;
          } else if (verbA < verbB) {
            comparison = -1;
          }
  
          return comparison;
          });

          let currentVerb: number;
          if(this.selectedVerb) {
            const verbsLength: number = this.infinitives.length;
            let verb: number;
            for(let i = 0; i < verbsLength; i++){
              if(this.infinitives[i].id === this.selectedVerb){
                verb = i;
              }
            }

            this.getCurrentVerb(verb, this.selectedTense);
          } else {
            this.numberQuestions = parseInt(data.numberVerbs);
            this.verbs = this.getVerbIds( this.infinitives );
            this.randomNumberService.generateRandomNumberArray(this.numberQuestions, this.verbs.length, this.questionSet );
            let currentVerb = this.questionSet[this.currentVerb];
            this.getCurrentVerb( currentVerb, this.selectedTense );
          }
        }, (error) => {
          console.log('there was an error sending the query', error);
        })
    }
  }

  getVerbIds = (verbs: any): any => {
    const numberVerbs = verbs.length;
    const verbIds = [];
    for(let i = 0; i < numberVerbs; i++) {
      verbIds.push( parseInt( verbs[i].id ) );
    }

    return verbIds;
  }

  getCurrentVerb( verb: number, tense: number ) {
    this.infinitive = this.infinitives[verb].infinitive;
    this.translation = '[ ' + this.infinitives[verb].translation + ' ]';
    this.reportDatum = {};
    this.reportDatum.verb = this.infinitive;
    this.queryVerb = this.apollo.watchQuery<any>({
      query: this.vs.Conjugation,
      variables: {
        verb: parseInt( this.infinitives[verb].id ),
        tense: parseInt( tense.toString() )
      }
    })
      .valueChanges
      .subscribe( result => {
        const conjugationData = JSON.parse(JSON.stringify(result.data));
        this.reportDatum.answers = conjugationData.conjugation[0];
        this.fade = this.fade === 'in' ? 'out' : 'in';
          }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  getNextVerb() {
    if( this.currentVerb < this.numberQuestions ) {
      this.currentVerb++;
      this.resetInputAnswers();
      this.getCurrentVerb( this.questionSet[this.currentVerb], this.selectedTense );
    } 
  }

  getAnswers() {
    const userAnswers = {
      yo: this.inputAnswers.yo,
      tu: this.inputAnswers.tu,
      el: this.inputAnswers.el,
      nosotros: this.inputAnswers.nosotros,
      els: this.inputAnswers.els
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

  createReport = () => {
    this.showForm = false;
    this.showReport = true;
    this.showOverlay = true;

    for(let i = 0; i < this.numberQuestions; i++) {
      if (this.reportData[i]['answers'].yo === this.reportData[i]['userAnswers'].yo) this.numberCorrect++;
      if (this.reportData[i]['answers'].tu === this.reportData[i]['userAnswers'].tu) this.numberCorrect++;
      if (this.reportData[i]['answers'].el === this.reportData[i]['userAnswers'].el) this.numberCorrect++;
      if (this.reportData[i]['answers'].nosotros === this.reportData[i]['userAnswers'].nosotros) this.numberCorrect++;
      if (this.reportData[i]['answers'].els === this.reportData[i]['userAnswers'].els) this.numberCorrect++;
    }

    this.report.score = Math.round( ( this.numberCorrect / ( this.numberQuestions * 5 ) ) * 100 ); 
    this.report.correctAnswers = this.numberCorrect;
    this.report.numberQuestions = this.numberQuestions * 5;
    this.report.title = 'Verb Conjugator Report';
    this.report.headings = ['infinitive', 'yo', 'tu', 'el', 'nosotros', 'els'];
    this.report.reportData = this.reportData;
  }

  resetCurrentAnswers() {
    const answers = Object.keys( this.currentAnswers );
    for(const answer of answers) {
      this.currentAnswers[answer] = '';
    }
  }

  resetInputAnswers() {
    this.inputAnswers = {
      yo: '',
      tu: '',
      el: '',
      nosotros: '',
      els: ''
      };
  }
  
  getSelectedTextbox(textboxID) {
    this.selectedTextbox = textboxID;
  }

  placeAccent(event) {
    let selectedTextbox = <HTMLInputElement>document.getElementById(this.selectedTextbox);

    this.accent = event;

    let currentPosition = selectedTextbox.selectionStart;
    let originalValue = selectedTextbox.value;
    let newValue = originalValue.substring(0, currentPosition) + this.accent + originalValue.substring(currentPosition);
    selectedTextbox.value = newValue;
  }

  reset() {
    this.resetCurrentAnswers();
    this.currentVerb = 0;
    this.numberCorrect = 0;
    this.getNextVerb();
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
