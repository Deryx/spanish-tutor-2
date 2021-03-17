import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VocabularyCategoriesService } from '../../services/vocabulary-categories.service';
import { VocabularyService } from '../../services/vocabulary.service';
import { ApolloModule, Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

@Component({
  selector: 'app-vocabulary-overlay-form',
  templateUrl: './vocabulary-overlay-form.component.html',
  styleUrls: ['./vocabulary-overlay-form.component.css'],
})

export class VocabularyOverlayFormComponent implements OnInit {
  isVisible: boolean = true;
  numberQuestions: number;
  category: number;
  categories: any;
  dictionary: any;

  private queryCategories: Subscription;

  @Output() formChange = new EventEmitter();

  constructor( private vcs: VocabularyCategoriesService, private apollo: Apollo ) { }
 
  ngOnInit() {
    this.vcs.getCategories()
      .subscribe(result => {
        const categoryData = JSON.parse(JSON.stringify(result));
        this.categories = categoryData
        this.setCategories();
      });
  }

  setCategories = () => {
    let categorySelect = document.getElementById( 'category' );
    let firstOption = document.createElement( 'option' );
    firstOption.disabled = true;
    firstOption.selected = true;
    firstOption.label = 'SELECT A CATEGORY';
    categorySelect.appendChild( firstOption );

    let secondOption = document.createElement( 'option' );
    secondOption.label = 'All';
    categorySelect.appendChild( secondOption );

    for(let i = 0; i < this.categories.length; i++) {
      let category = this.categories[i];

      let option = document.createElement( 'option' );
      option.style.textTransform = "Capitalize";
      option.label = category['category'];
      option.value = category['id'];

      categorySelect.appendChild( option );
    }
  }

  onClick() {
    let overlayData = {
      isVisible: !this.isVisible,
      numberQuestions: this.numberQuestions,
      category: this.category
    }

    this.formChange.emit( overlayData );
  }
}
