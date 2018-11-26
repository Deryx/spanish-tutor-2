import { Component, OnInit } from '@angular/core';
import { VerbService } from '../verb.service';
import { RandomNumberGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-verb-conjugator',
  templateUrl: './verb-conjugator.component.html',
  styleUrls: ['./verb-conjugator.component.css']
})
export class VerbConjugatorComponent implements OnInit {
  infinitives: any;
  verb: string;
  translation: string;
  questionSet: number[] = [];
  currentQuestion = 0;
  infinitive = '';
  yo: string = '';
  tu: string = '';
  el: string = '';
  nosotros: string = '';
  ellos: string = '';

  constructor( private verbs: VerbService, private randomNumberService: RandomNumberGeneratorService ) { }

  ngOnInit() {
    this.verbs.getVerbs()
      .subscribe(
        data => {
          this.infinitives = data;

          this.randomNumberService.generateRandomNumberArray(5, this.infinitives.length, this.questionSet );

          let currentVerb = this.questionSet[this.currentQuestion];
          this.infinitive = this.infinitives[currentVerb].infinitive;
          this.translation = '[ ' + this.infinitives[currentVerb].translation + ' ]';
        });
  }

  placeAccent() {

  }
}
