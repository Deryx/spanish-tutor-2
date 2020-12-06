import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { ApolloModule, Apollo } from 'apollo-angular';
import { VerbService } from '../../services/verb.service';

import gql from 'graphql-tag';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-conjugator-overlay-form',
  templateUrl: 'conjugator-overlay-form.component.html',
  styleUrls: ['conjugator-overlay-form.component.css']
})

export class ConjugatorOverlayFormComponent implements OnInit {
  isVisible: boolean = true;
  numberVerbs: number;
  verbSelect: number;
  tenseSelect: number;
  tenses: any;
  infinitives: any;
  conjugationType: string;
  showRandom: boolean = false;
  showSingle: boolean = false;

  disableVerbSelect: boolean = false;

  private queryTenses: Subscription;
  private queryVerbs: Subscription;

  @Output() formChange = new EventEmitter();

  constructor( private apollo: Apollo, private vs: VerbService ) { }

  ngOnInit() {
    this.getTenses();
  }

  getVerbs = () => {
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

  onChange() {
    if(this.conjugationType === 'random'){
      this.showRandom = true;
      this.showSingle = false;
    } else if(this.conjugationType === 'single'){
      this.showRandom = false;
      this.showSingle = true;
    
      this.getVerbs();
    }
  }

  onClick() {
    let overlayData = {
      isVisible: !this.isVisible,
      numberVerbs: this.numberVerbs,
      verb: this.verbSelect,
      tense: this.tenseSelect
    }

    let tenseSelected = this.tenseSelect;
    let verbOptionSelect = this.numberVerbs || this.verbSelect;

    if(tenseSelected && verbOptionSelect) this.formChange.emit( overlayData );
  }
}
