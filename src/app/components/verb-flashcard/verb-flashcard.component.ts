import { Component, OnInit } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { VerbService } from '../../services/verb.service';
import { Conjugation } from '../../conjugation';
import { FlipAnimation } from '../../../animations/flip.animation'
import { FadeAnimation } from '../../../animations/fade.animation';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import gql from 'graphql-tag';

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
  pronunciation: string = 'pronunciation';
  tense: any;
  tenseSelect: any;
  selectedTense: string;
  verbSelect: string;
  conjugation: any;
  conjugations: any;
  tenses: any;

  private queryVerbs: Subscription;
  private queryVerb: Subscription;
  private queryTenses: Subscription;

  constructor( private apollo: Apollo, private vs: VerbService ) { }

  ngOnInit = (): void => {
    this.createTenseSelect();
    this.createVerbSelect();
  }

  createVerbSelect = (): void => {
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

      this.setVerbSelect();
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  setVerbSelect = (): void => {
    let infinitiveSelect = document.getElementById('verbSelect');

    let firstOption = document.createElement('option');
    firstOption.value = '0';
    firstOption.disabled = true;
    firstOption.selected = true;
    firstOption.innerHTML = 'SELECT A VERB ...';
    infinitiveSelect.appendChild(firstOption);

    let numVerbs = this.infinitives.length;
    for (let i = 0; i < numVerbs; i++) {
      let infinitive: string = this.infinitives[i].infinitive;

      let option = document.createElement('option');
      option.value = this.infinitives[i].id;
      option.label = infinitive.charAt(0).toUpperCase() + infinitive.slice(1);

      infinitiveSelect.appendChild(option);
    }
  }

  createTenseSelect = (): void => {
    this.queryTenses = this.apollo.watchQuery<any>({
      query: this.vs.Tenses
    })
      .valueChanges
      .subscribe(result => {
        const tensesData = JSON.parse(JSON.stringify(result.data));
        this.tenses = tensesData.tenses;

        this.setTenseSelect();
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  setTenseSelect = (): void => {
    let tenseSelect = document.getElementById('tenseSelect');

    let firstOption = document.createElement('option');
    firstOption = document.createElement('option');
    firstOption.value = '';
    firstOption.disabled = true;
    firstOption.selected = true;
    firstOption.innerHTML = 'SELECT A TENSE ...';
    tenseSelect.appendChild(firstOption);

    let numTenses = this.tenses.length;
    for(let i = 0; i < numTenses; i++){
      let tense: string = this.tenses[i];

      let option = document.createElement('option');
      option.label = tense['tense'];
      option.value = tense['id'];

      tenseSelect.appendChild(option);
    }
  }

  changeVerb = (): void => {
    this.tenseSelect = '';
    const retrievedVerb = this.retrieveVerb( this.infinitives, this.verbSelect );
    this.infinitive = retrievedVerb.infinitive;
    this.translation = retrievedVerb.translation;
    this.pronunciation = retrievedVerb.pronunciation;

    this.getVerbConjugations();
  
    const card: any = document.querySelector("div.card");
    let cardFlipState = card.style.transform;
    if(cardFlipState === 'rotateX(180deg)'){ 
      this.flip = 'inactive';
    }
  }

  retrieveVerb(verbs: any, verb: string): any {
    const numberVerbs = verbs.length;
    const verbObject = {
      infinitive: '',
      translation: '',
      pronunciation: ''
    };

    for(let i = 0; i < numberVerbs; i++){
      if(verbs[i].id === verb){
        verbObject.infinitive = verbs[i].infinitive;
        verbObject.translation = verbs[i].translation;
        verbObject.pronunciation = verbs[i].pronunciation;

        break;
      }
    }

    return verbObject;
  }

  changeTense = (): void => {
    const tensesArray = ['present', 'preterite', 'imperfect', 'future', 'conditional'];
    this.selectedTense = tensesArray[this.tenseSelect - 1];
    let index = this.tenseSelect - 1;
    if(index === 3 && this.conjugations[index].tense === 5) {
      index = 4;
    } else if(index === 4 && this.conjugations[index].tense === 4) {
      index = 3;
    } 
    this.conjugation = this.conjugations[index];

    this.fade = this.fade === 'in' ? 'out' : 'in';
  }

  getVerbConjugations = (): void => {
    this.queryVerb = this.apollo.watchQuery<any>({
      query: this.vs.Conjugations,
      variables: {
        verb: parseInt(this.verbSelect)
      }
    })
      .valueChanges
      .subscribe( result => {
        const conjugationData = JSON.parse(JSON.stringify(result.data));
        this.conjugations = conjugationData.conjugations;
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  flipCard = () => {
    if(this.infinitive && this.tenseSelect) {
      this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
    }
  }
}
