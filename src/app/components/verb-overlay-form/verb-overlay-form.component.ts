import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { ApolloModule, Apollo } from 'apollo-angular';
import { VerbService } from '../../services/verb.service';

import gql from 'graphql-tag';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-verb-overlay-form',
  templateUrl: './verb-overlay-form.component.html',
  styleUrls: ['./verb-overlay-form.component.css']
})
export class VerbOverlayFormComponent implements OnInit {
  isVisible: boolean = true;
  numberQuestions: number;
  verbSelect: number;
  tenseSelect: number;
  tenses: any;
  infinitives: any;
  conjugationType: string;
  showRandom: boolean = false;
  showSingle: boolean = false;

  disableVerbSelect: boolean = false;

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
      numberVerbs: this.numberQuestions,
      tense: this.tenseSelect
    }

    let tenseSelected = this.tenseSelect;
    let numberQuestions = this.numberQuestions;

    if(tenseSelected && numberQuestions) this.formChange.emit( overlayData );
  }
}
