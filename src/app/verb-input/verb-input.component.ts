import { Component, OnInit } from '@angular/core';
import { VerbService } from '../verb.service';
import { Verb } from '../verb';
import { Conjugation } from '../conjugation'

@Component({
  selector: 'app-verb-input',
  templateUrl: './verb-input.component.html',
  styleUrls: ['./verb-input.component.css']
})
export class VerbInputComponent {
  currentTense = 'present';

  infinitive = '';
  translation = '';

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

  constructor( private verbs: VerbService ){}

  ngOnInit(){}

  resetForm(){
    this.currentTense = 'present';

    this.infinitive = '';
    this.translation = '';

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
    }
  }

  onSubmit() {
    let verb = new Verb();

    verb.setInfinitive( this.infinitive );
    verb.setTranslation( this.translation );

    // Present tense
    let presentConjugation = new Conjugation();
    presentConjugation.tense = 'present';
    presentConjugation.yo = this.presentYo;
    presentConjugation.tu = this.presentTu;
    presentConjugation.el = this.presentEl;
    presentConjugation.nosotros = this.presentNosotros;
    presentConjugation.els = this.presentEls;
    verb.addConjugation( presentConjugation );

    // Preterite tense
    let preteriteConjugation = new Conjugation();
    preteriteConjugation.tense = 'preterite';
    preteriteConjugation.yo = this.preteriteYo;
    preteriteConjugation.tu = this.preteriteTu;
    preteriteConjugation.el = this.preteriteEl;
    preteriteConjugation.nosotros = this.preteriteNosotros;
    preteriteConjugation.els = this.preteriteEls;
    verb.addConjugation( preteriteConjugation );

    // Imperfect tense
    let imperfectConjugation = new Conjugation();
    imperfectConjugation.tense = 'imperfect';
    imperfectConjugation.yo = this.imperfectYo;
    imperfectConjugation.tu = this.imperfectTu;
    imperfectConjugation.el = this.imperfectEl;
    imperfectConjugation.nosotros = this.imperfectNosotros;
    imperfectConjugation.els = this.imperfectEls;
    verb.addConjugation( imperfectConjugation );

    // Future tense
    let futureConjugation = new Conjugation();
    futureConjugation.tense = 'future';
    futureConjugation.yo = this.futureYo;
    futureConjugation.tu = this.futureTu;
    futureConjugation.el = this.futureEl;
    futureConjugation.nosotros = this.futureNosotros;
    futureConjugation.els = this.futureEls;
    verb.addConjugation( futureConjugation );

    this.verbs.addVerb( verb )
      .subscribe();

    this.resetForm();
  }
}
