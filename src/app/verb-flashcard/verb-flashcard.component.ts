import { Component, OnInit } from '@angular/core';
import { VerbService } from '../verb.service';
import { FlipAnimation } from '../../animations/flip.animation'

@Component({
  selector: 'app-verb-flashcard',
  templateUrl: './verb-flashcard.component.html',
  styleUrls: ['./verb-flashcard.component.css'],
  animations: FlipAnimation.animations
})

export class VerbFlashcardComponent implements OnInit {
  flip = 'inactive';
  infinitives: any;
  verb: any;
  infinitive: string = 'infinitive';
  translation: string = '[ translation ]';
  tense: any;
  conjugation: any;

  constructor( private verbs: VerbService ) { }

  ngOnInit() {
    this.verbs.getVerbs()
      .subscribe(
        data => {
          this.infinitives = data;

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
            option.value = i.toString();
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
          this.translation = this.verb.translation;
          this.tense = '';
          this.conjugation = '';

          let card = document.querySelector('.card');
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
          this.conjugation = this.verb.conjugations[parseInt(this.tense)];
        }
      )
  }

  flipCard() {
    if(this.infinitive && this.tense) {
      this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
    }
  }
}
