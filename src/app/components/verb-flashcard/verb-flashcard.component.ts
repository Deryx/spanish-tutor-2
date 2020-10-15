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

  ngOnInit() {
    this.getTenses();
    this.getVerbs();
  }

  getVerbs = () => {
    this.queryVerbs = this.apollo.watchQuery<any>({
      query: this.vs.Verbs
    })
      .valueChanges
      .subscribe(result => {
        const verbData = JSON.parse(JSON.stringify(result.data));
        console.log(verbData);
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

      let infinitiveSelect = document.getElementById('verbSelect');

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
        option.value = this.infinitives[i].id;
        option.label = infinitive.charAt(0).toUpperCase() + infinitive.slice(1);

        infinitiveSelect.appendChild(option);
      }
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  getTenses = () => {
    this.queryTenses = this.apollo.watchQuery<any>({
      query: this.vs.Tenses
    })
      .valueChanges
      .subscribe(result => {
        const tensesData = JSON.parse(JSON.stringify(result.data));
        this.tenses = tensesData.tenses;

        this.setTenses();
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  setTenses = () => {
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

  changeVerb(){
    this.queryVerb = this.apollo.watchQuery<any>({
      query: this.vs.Verb,
      variables: {
        id: parseInt(this.verbSelect)
      }
    })
      .valueChanges
      .subscribe( result => {
        const verbData = JSON.parse(JSON.stringify(result.data));
        this.verb = verbData.verb;
        this.infinitive = this.verb[0].infinitive;
        this.translation = this.verb[0].translation;
        this.tense = '';
        this.conjugation = '';
    
        const card: any = document.querySelector("div.card");
        let cardFlipState = card.style.transform;
        if(cardFlipState === 'rotateX(180deg)') this.flip = 'inactive';
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  changeTense(){
    this.queryVerb = this.apollo.watchQuery<any>({
      query: this.vs.Conjugations,
      variables: {
        verb: parseInt(this.verbSelect)
      }
    })
      .valueChanges
      .subscribe( result => {
        const conjugationData = JSON.parse(JSON.stringify(result.data));
        const tensesArray = ['present', 'preterite', 'imperfect', 'future', 'conditional'];
        this.selectedTense = tensesArray[this.tenseSelect - 1];
        this.conjugations = conjugationData.conjugations;
        this.conjugation = this.conjugations[this.tenseSelect - 1];
        this.fade = this.fade === 'in' ? 'out' : 'in';
          }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  flipCard() {
    if(this.infinitive && this.tenseSelect) {
      this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
    }
  }
}
