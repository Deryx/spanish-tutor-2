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

  selectedTextbox: string;
  accent: string;

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

  report: any = {};
  responses: any = [];

  private queryVerbs: Subscription;
  private queryVerb: Subscription;
  private queryTenses: Subscription;

  constructor( private vs: VerbService, private randomNumberService: RandomNumberGeneratorService, private router: Router, private apollo: Apollo ) { }

  getOverlayData(data) {
    if(!data.isVisible) {
      this.showOverlay = data.isVisible;
      this.showConjugatorOverlay = data.isVisible;
      this.showForm = true;
      this.tense = data.tense;

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

          this.numberQuestions = parseInt(data.numberVerbs);
          this.randomNumberService.generateRandomNumberArray(this.numberQuestions, this.infinitives.length, this.questionSet );
          this.getCurrentVerb( this.currentVerb, this.tense );
          delete this.currentAnswers._id;
        }, (error) => {
          console.log('there was an error sending the query', error);
        })
    }
  }

  getCurrentVerb( verb: number, tense: string) {
    const currentVerb = this.questionSet[verb];
    this.infinitive = this.infinitives[currentVerb].infinitive;
    this.translation = '[ ' + this.infinitives[currentVerb].translation + ' ]';
    this.currentAnswers = this.infinitives[currentVerb].conjugations[this.tense];
  }

  getNextVerb() {
    let numberVerbs: number = this.questionSet.length;
    if( this.currentVerb < numberVerbs ) {
      this.currentVerb++;
      this.resetInputAnswers();
      this.getCurrentVerb( this.currentVerb, this.tense );
    } 
  }

  getAnswers() {
    const responseObj: any = {};
    let score: number = 0;

    if( this.currentAnswers.yo === this.inputAnswers.yo ) this.numberCorrect++;
    if( this.currentAnswers.tu === this.inputAnswers.tu ) this.numberCorrect++;
    if( this.currentAnswers.el === this.inputAnswers.el ) this.numberCorrect++;
    if( this.currentAnswers.nosotros === this.inputAnswers.nosotros ) this.numberCorrect++;
    if( this.currentAnswers.els === this.inputAnswers.els ) this.numberCorrect++;

    responseObj.verb = this.infinitive;
    responseObj.answers = this.currentAnswers;
    responseObj.inputs = this.inputAnswers;

    this.responses.push( responseObj );

    if(this.currentVerb === this.numberQuestions - 1) {
      this.showForm = false;
      this.showReport = true;
      this.showOverlay = true;
      score = Math.round( ( this.numberCorrect / ( this.numberQuestions * 5 ) ) * 100 ); 

      this.report.title = 'Verb Conjugator Report';
      this.report.scoreMessage = 'You scored ' + score + '%';
      this.report.headings = ['infinitive', 'yo', 'tu', 'el', 'nosotros', 'els'];
      this.report.responses = this.responses;
    } else {
      this.getNextVerb();
    }
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
    console.log(this.selectedTextbox);
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
