import { Component, OnInit } from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { FlipAnimation } from '../../../animations/flip.animation'
import { FadeAnimation } from '../../../animations/fade.animation';

@Component({
  selector: 'app-verb-flashcard',
  templateUrl: './verb-flashcard.component.html',
  styleUrls: ['./verb-flashcard.component.css'],
  animations: [FlipAnimation.animations, FadeAnimation.animations]
})

export class VerbFlashcardComponent implements OnInit {
  flip = 'inactive';
  fade = 'out';
  infinitives: any;
  verb: any;
  infinitive: string = 'infinitive';
  translation: string = 'translation';
  tense: any;
  conjugation: any;

  constructor( private verbs: VerbService ) { }

  ngOnInit() {
    this.verbs.getVerbs()
      .subscribe(
        data => {
          this.infinitives = data;
          this.infinitives = this.infinitives.Items;
          this.infinitives.sort((a, b) => {
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

          let infinitiveSelect = document.getElementById('infinitive');

          let firstOption = document.createElement('option');
          firstOption.value = '';
          firstOption.disabled = true;
          firstOption.selected = true;
          firstOption.innerHTML = 'SELECT A VERB ...';
          infinitiveSelect.appendChild(firstOption);

          let numVerbs = this.infinitives.length;
          for (let i = 0; i < numVerbs; i++) {
            let infinitive: string = this.infinitives[i].infinitive;

            let option = document.createElement('option');
            option.value = infinitive;
            option.innerHTML = infinitive.charAt(0).toUpperCase() + infinitive.slice(1);

            infinitiveSelect.appendChild(option);
          }

          let tenses: string[] = ['present', 'preterite', 'imperfect', 'future'];

          let tenseSelect = document.getElementById('tense');

          firstOption = document.createElement('option');
          firstOption.value = '';
          firstOption.disabled = true;
          firstOption.selected = true;
          firstOption.innerHTML = 'SELECT A TENSE ...';
          tenseSelect.appendChild(firstOption);

          let numTenses = tenses.length;
          for(let i = 0; i < numTenses; i++){
            let tense: string = tenses[i];

            let option = document.createElement('option');
            option.value = tense;
            option.innerHTML = tense;

            tenseSelect.appendChild(option);
          }
        });
  }

  changeVerb(){
    return this.verbs.getVerb( this.infinitive )
      .subscribe(
        data => {
          this.verb = data;
          this.verb = this.verb.Items;
          this.translation = this.verb[0].translation;
          this.tense = '';
          this.conjugation = '';

          const card: any = document.querySelector("div.card");
          let cardFlipState = card.style.transform;
          if(cardFlipState === 'rotateX(180deg)') this.flip = 'inactive';
        }
      )
  }

  changeTense(){
    return this.verbs.getVerb( this.infinitive )
      .subscribe(
        data => {
          this.verb = data;
          this.verb = this.verb.Items;
          this.conjugation = this.verb[0].conjugations[this.tense];
          this.fade = this.fade === 'in' ? 'out' : 'in';
        }
      )
  }

  flipCard() {
    if(this.infinitive && this.tense) {
      this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
    }
  }
}
