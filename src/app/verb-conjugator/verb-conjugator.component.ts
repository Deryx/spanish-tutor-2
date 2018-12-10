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

  infinitives: any;
  verb: string;
  tense: string;
  translation: string;
  questionSet: number[] = [];
  currentVerb = 0;
  currentAnswers: any = {
    yo: '',
    tu: '',
    el: '',
    nosotros: '',
    ellos: ''
  };
  infinitive = '';
  yo: string = '';
  tu: string = '';
  el: string = '';
  nosotros: string = '';
  ellos: string = '';

  constructor( private verbs: VerbService, private randomNumberService: RandomNumberGeneratorService ) { }

  getOverlayData(data) {
    if(!data.isVisible) {
      this.showOverlay = data.isVisible;
      this.showConjugatorOverlay = data.isVisible;
      this.showForm = true;
      this.tense = data.tense;

      this.verbs.getVerbs()
        .subscribe(
          data => {
            this.infinitives = data;
            console.log(this.infinitives);

            this.randomNumberService.generateRandomNumberArray(data.numberVerbs, this.infinitives.length, this.questionSet );
            this.getCurrentVerb( this.currentVerb, this.tense );
          });
    }
  }

  getCurrentVerb( verb: number, tense: string) {
    let currentVerb = this.questionSet[verb];
    this.infinitive = this.infinitives[verb].infinitive;
    this.translation = '[ ' + this.infinitives[verb].translation + ' ]';
    let tenses = {
      'present': 0,
      'preterite': 1,
      'imperfect': 2,
      'future': 3
    }
    let conjugation = tenses[tense];
    let currentConjugation = this.infinitives[verb].conjugations[conjugation];
    this.currentAnswers.yo = currentConjugation.yo;
    this.currentAnswers.tu = currentConjugation.tu;
    this.currentAnswers.el = currentConjugation.el;
    this.currentAnswers.nosotros = currentConjugation.nosotros;
    this.currentAnswers.ellos = currentConjugation.els;
  }
}
