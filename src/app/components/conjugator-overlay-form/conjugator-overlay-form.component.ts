import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { ApolloModule, Apollo } from 'apollo-angular';
import { VerbService } from '../../services/verb.service';

import gql from 'graphql-tag';

@Component({
  selector: 'app-conjugator-overlay-form',
  templateUrl: 'conjugator-overlay-form.component.html',
  styleUrls: ['conjugator-overlay-form.component.css']
})

export class ConjugatorOverlayFormComponent implements OnInit {
  isVisible: boolean = true;
  numberVerbs: number;
  tenseSelect: any;
  tenses: any;

  private queryTenses: Subscription;

  @Output() formChange = new EventEmitter();

  constructor( private apollo: Apollo, private vs: VerbService ) { }

  ngOnInit() {
    this.getTenses();
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

  onClick() {
    let overlayData = {
      isVisible: !this.isVisible,
      numberVerbs: this.numberVerbs,
      tense: this.tenseSelect
    }

    this.formChange.emit( overlayData );
  }
}
