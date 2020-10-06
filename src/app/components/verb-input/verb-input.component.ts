import { Component } from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { Verb } from '../../verb';
import { Conjugation } from '../../conjugation'
import { Observable } from 'rxjs';
import { ApolloModule, Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

import gql from 'graphql-tag';

@Component({
  selector: 'app-verb-input',
  templateUrl: './verb-input.component.html',
  styleUrls: ['./verb-input.component.css']
})
export class VerbInputComponent {
  currentTense = 'present';

  infinitive = '';
  translation = '';
  pronunciation = '';

  presentYo = '';
  presentTu = '';
  presentEl = '';
  presentNosotros = '';
  presentEls = '';

  preteriteYo = '';
  preteriteTu = '';
  preteriteEl = '';
  preteriteNosotros = '';
  preteriteEls = '';

  imperfectYo = '';
  imperfectTu = '';
  imperfectEl = '';
  imperfectNosotros = '';
  imperfectEls = '';

  futureYo = '';
  futureTu = '';
  futureEl = '';
  futureNosotros = '';
  futureEls = '';

  conditionalYo = '';
  conditionalTu = '';
  conditionalEl = '';
  conditionalNosotros = '';
  conditionalEls = '';

  newVerb = new Verb();
  selectedTextbox: string;
  accent: string;
  id: number;

  presentConjugation: Conjugation = new Conjugation();
  preteriteConjugation: Conjugation = new Conjugation();
  imperfectConjugation: Conjugation = new Conjugation();
  futureConjugation: Conjugation = new Conjugation();
  conditionalConjugation: Conjugation = new Conjugation();

  private queryVerb: Subscription;

  constructor( private vs: VerbService, private apollo: Apollo ){}

  resetForm(){
    this.currentTense = 'present';

    this.infinitive = '';
    this.translation = '';
    this.pronunciation = '';

    this.presentYo = '';
    this.presentTu = '';
    this.presentEl = '';
    this.presentNosotros = '';
    this.presentEls = '';

    this.preteriteYo = '';
    this.preteriteTu = '';
    this.preteriteEl = '';
    this.preteriteNosotros = '';
    this.preteriteEls = '';

    this.imperfectYo = '';
    this.imperfectTu = '';
    this.imperfectEl = '';
    this.imperfectNosotros = '';
    this.imperfectEls = '';

    this.futureYo = '';
    this.futureTu = '';
    this.futureEl = '';
    this.futureNosotros = '';
    this.futureEls = '';

    this.conditionalYo = '';
    this.conditionalTu = '';
    this.conditionalEl = '';
    this.conditionalNosotros = '';
    this.conditionalEls = '';
  }

  changeTense( tense: string ){
    this.currentTense = tense;
  }

  next(){
    if( this.currentTense === 'present' ){
      this.changeTense( 'preterite' );
    }else if( this.currentTense === 'preterite' ){
      this.changeTense('imperfect');
    }else if( this.currentTense === 'imperfect' ){
      this.changeTense('future');
    }else if( this.currentTense === 'future' ){
      this.changeTense('conditional');
    }
}

  addVerb = (verb: Verb) => {
    this.apollo.mutate({
      mutation: this.vs.CreateVerb,
      variables: {
        infinitive: verb.infinitive,
        translation: verb.translation,
        pronunciation: verb.pronunciation
      }
    }).subscribe( data => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    })
  };

  addConjugation = (conjugation: Conjugation) => {
    this.apollo.mutate({
      mutation: this.vs.CreateConjugation,
      variables: {
        verb: conjugation.verb,
        tense: conjugation.tense,
        yo: conjugation.yo,
        tu: conjugation.tu,
        el: conjugation.el,
        nosotros: conjugation.nosotros,
        els: conjugation.els
      }
    }).subscribe( data => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    })
  }

  onSubmit() {
    this.newVerb.setInfinitive( this.infinitive );
    this.newVerb.setTranslation( this.translation );
    this.newVerb.setPronunciation( this.pronunciation );

    this.presentConjugation.setTense(parseInt('1'));
    this.presentConjugation.setYo( this.presentYo );
    this.presentConjugation.setTu( this.presentTu );
    this.presentConjugation.setEl( this.presentEl );
    this.presentConjugation.setNosotros( this.presentNosotros );
    this.presentConjugation.setEls( this.presentEls );

    this.preteriteConjugation.setTense(parseInt('2'));
    this.preteriteConjugation.setYo( this.preteriteYo );
    this.preteriteConjugation.setTu( this.preteriteTu );
    this.preteriteConjugation.setEl( this.preteriteEl );
    this.preteriteConjugation.setNosotros( this.preteriteNosotros );
    this.preteriteConjugation.setEls( this.preteriteEls );

    this.imperfectConjugation.setTense(parseInt('3'));
    this.imperfectConjugation.setYo( this.imperfectYo );
    this.imperfectConjugation.setTu( this.imperfectTu );
    this.imperfectConjugation.setEl( this.imperfectEl );
    this.imperfectConjugation.setNosotros( this.imperfectNosotros );
    this.imperfectConjugation.setEls( this.imperfectEls );

    this.futureConjugation.setTense(parseInt('4'));
    this.futureConjugation.setYo( this.futureYo );
    this.futureConjugation.setTu( this.futureTu );
    this.futureConjugation.setEl( this.futureEl );
    this.futureConjugation.setNosotros( this.futureNosotros );
    this.futureConjugation.setEls( this.futureEls );

    this.conditionalConjugation.setTense(parseInt('5'));
    this.conditionalConjugation.setYo( this.conditionalYo );
    this.conditionalConjugation.setTu( this.conditionalTu );
    this.conditionalConjugation.setEl( this.conditionalEl );
    this.conditionalConjugation.setNosotros( this.conditionalNosotros );
    this.conditionalConjugation.setEls( this.conditionalEls );
    this.addVerb( this.newVerb );

    this.queryVerb = this.apollo.watchQuery({
      query: this.vs.VerbId,
      variables: {
        verb: this.infinitive
      }
    }).valueChanges
      .subscribe(result => {
        const verbData = JSON.parse(JSON.stringify(result.data));
        const verbId = JSON.parse(JSON.stringify(verbData.verbId))
        this.id = parseInt(verbId['id']);

        this.presentConjugation.setVerb( this.id );
        this.addConjugation( this.presentConjugation );
    
        this.preteriteConjugation.setVerb( this.id );
        this.addConjugation( this.preteriteConjugation );
    
        this.imperfectConjugation.setVerb( this.id );
        this.addConjugation( this.imperfectConjugation );
    
        this.futureConjugation.setVerb( this.id );
        this.addConjugation( this.futureConjugation );
    
        this.conditionalConjugation.setVerb( this.id );
        this.addConjugation( this.conditionalConjugation );
      });

    this.resetForm();
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
}
