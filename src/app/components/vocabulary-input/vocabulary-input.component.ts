import { Component, OnInit } from '@angular/core';
import { VocabularyCategoriesService } from '../../services/vocabulary-categories.service';
import { VocabularyService } from '../../services/vocabulary.service';
import { Vocabulary } from '../../vocabulary';
import { ApolloModule, Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

@Component({
  selector: 'app-vocabulary-input',
  templateUrl: './vocabulary-input.component.html',
  styleUrls: ['./vocabulary-input.component.css']
})
export class VocabularyInputComponent implements OnInit {
  category: string;
  categories: any;
  word: string;
  translation: string;
  gender: string;
  image: string;
  pronunciation: string;
  dictionary: any;
  createdWord: Vocabulary;

  accent: string;

  private queryCategories: Subscription;

  vocabulary = new Vocabulary();

  constructor( private vs: VocabularyService, private vcs: VocabularyCategoriesService, private apollo: Apollo ){}

  ngOnInit(){
    this.retrieveCategories();
  }

  retrieveCategories = () => {
    this.queryCategories = this.apollo.watchQuery<any>({
      query: this.vcs.Categories
    }).valueChanges
      .subscribe(result => {
        const categoryData = JSON.parse(JSON.stringify(result.data));
        this.categories = categoryData.categories.sort((a, b) => {
          const wordA = a.category;
          const wordB = b.category;

          let comparison = 0;
          if(wordA > wordB) {
            comparison = 1;
          } else if (wordA < wordB) {
            comparison = -1;
          }

          return comparison;
        });
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

    for(let i = 0; i < this.categories.length; i++) {
      let category = this.categories[i];

      let option = document.createElement( 'option' );
      option.style.textTransform = "Capitalize";
      option.label = category['category'];
      option.value = category['id'];

      categorySelect.appendChild( option );
    }
  }

  addWord = (word: Vocabulary) => {
    this.apollo.mutate({
      mutation: this.vs.CreateWord,
      variables: {
        word: word.word,
        translation: word.translation,
        pronunciation: word.pronunciation,
        category: word.category,
        gender: word.gender,
        image: word.image
      }
    }).subscribe( data => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    })
  };

  placeAccent(event) {
    let inputBox = <HTMLInputElement>document.getElementById('word');
    this.accent = event;
    let currentPosition: number = inputBox.selectionStart;
    let originalValue = this.word;
    let newValue = originalValue.substring(0, currentPosition) + this.accent + originalValue.substring(currentPosition);
    this.word = newValue;
  }

  resetForm(){
    this.category = '';
    this.word = '';
    this.translation = '';
    this.gender =  '';
    this.image = '';
    this.pronunciation = '';
  }

  onSubmit(){
    this.vocabulary.setCategory( parseInt(this.category) );
    this.vocabulary.setWord( this.word );
    this.vocabulary.setTranslation( this.translation );
    this.vocabulary.setGender( this.gender );

    let image: any = this.image.match(/fakepath\\(.*)/);
    let folder = 'assets/images/';
    image = null || folder + image[1];

    this.vocabulary.setImage( image );
    this.vocabulary.setPronunciation( this.pronunciation );

    this.addWord( this.vocabulary );

    this.resetForm();
  }
}
