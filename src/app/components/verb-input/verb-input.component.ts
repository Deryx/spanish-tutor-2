import { Component } from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { Verb } from '../../verb';
import { Conjugation } from '../../conjugation'

@Component({
  selector: 'app-verb-input',
  templateUrl: './verb-input.component.html',
  styleUrls: ['./verb-input.component.css']
})
export class VerbInputComponent {
  buttonText: string = 'show accents';

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
  
  selectedTextbox: string;
  accent: string;

  constructor( private verbs: VerbService ){}

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
    const conjugations = {
      'present': {
        'yo': this.presentYo,
        'tu': this.presentTu,
        'el': this.presentEl,
        'nosotros': this.presentNosotros,
        'els': this.presentEls
      },
      'preterite': {
        'yo': this.preteriteYo,
        'tu': this.preteriteTu,
        'el': this.preteriteEl,
        'nosotros': this.preteriteNosotros,
        'els': this.preteriteEls
      },
      'imperfect': {
        'yo': this.imperfectYo,
        'tu': this.imperfectTu,
        'el': this.imperfectEl,
        'nosotros': this.imperfectNosotros,
        'els': this.imperfectEls
      },
      'future': {
        'yo': this.futureYo,
        'tu': this.futureTu,
        'el': this.futureEl,
        'nosotros': this.futureNosotros,
        'els': this.futureEls
      }
    };

    verb.addConjugations(conjugations);

    this.verbs.addVerb( verb )
      .subscribe();

    this.resetForm();
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
}
