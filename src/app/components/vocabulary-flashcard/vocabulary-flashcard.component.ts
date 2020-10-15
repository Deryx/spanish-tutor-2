import { Component, OnInit } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { FlipAnimation } from '../../../animations/flip.animation';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { VocabularyService } from '../../services/vocabulary.service';
import { VocabularyCategoriesService } from '../../services/vocabulary-categories.service';
import { Vocabulary } from '../../vocabulary';

import gql from 'graphql-tag';

@Component({
  selector: 'app-vocabulary-flashcard',
  templateUrl: './vocabulary-flashcard.component.html',
  styleUrls: ['./vocabulary-flashcard.component.css'],
  animations: FlipAnimation.animations
})

export class VocabularyFlashcardComponent implements OnInit {
  flip = 'inactive';
  searchWord: string = '';
  word: string = 'word';
  createdWord: Vocabulary;
  category: string;
  image: string;
  pronunciation: string = 'pronunciation';
  translation: string = '[ translation ]';
  categories: any;
  vocabularyCategory: any;
  index: number;
  dictionary: any;
  showImage: boolean = true;

  private queryCategories: Subscription;
  private queryWord: Subscription;
  private queryCategory: Subscription;
  private queryDictionary: Subscription;

  constructor( private apollo: Apollo, private vcs: VocabularyCategoriesService, private vs: VocabularyService ) { }

  ngOnInit(){
    this.getCategories();
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

  getCategories = () => {
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

  getWord = () => {
    this.queryWord = this.apollo.watchQuery<any>({
      query: this.vs.Word,
      variables: {
        word: this.searchWord
      }
    })
      .valueChanges
      .subscribe(result => {
        const wordData = JSON.parse(JSON.stringify(result.data));
        const searchWord = wordData.word[0];
        this.word = searchWord.word;
        this.pronunciation = searchWord.pronunciation;
        this.translation = '[ ' + searchWord.translation + ' ]';
        this.image = searchWord.image;
        this.showImage = ( this.image === 'assets/images/blank.png' ) ? false : true;
        this.searchWord = '';
      })
  }

  changeCategory = () => {
    const categoryObject = {
      query: this.vs.Category,
      variables: {
        category: parseInt(this.category)
      }
    };
    const dictionaryObject = {
      query: this.vs.Dictionary
    }
    const queryObject = (this.category) ? categoryObject : dictionaryObject;
    this.queryDictionary = this.apollo.watchQuery(queryObject)
    .valueChanges
    .subscribe( result => {
      const dictionaryData = JSON.parse(JSON.stringify(result.data));
      this.dictionary = (this.category) ? dictionaryData.category : dictionaryData.dictionary;
      this.index = 0;
      this.word = this.dictionary[this.index].word;
      this.pronunciation = this.dictionary[this.index].pronunciation;
      this.translation = '[ ' + this.dictionary[this.index].translation + ' ]';
      this.image = this.dictionary[this.index].image;
      this.showImage = ( this.image === 'assets/images/blank.png' ) ? false : true;
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  next = () => {
    const categoryObject = {
      query: this.vs.Category,
      variables: {
        category: parseInt(this.category)
      }
    };
    const dictionaryObject = {
      query: this.vs.Dictionary
    }
    const queryObject = (this.category) ? categoryObject : dictionaryObject;
    this.queryDictionary = this.apollo.watchQuery(queryObject)
    .valueChanges
    .subscribe( result => {
      const dictionaryData = JSON.parse(JSON.stringify(result.data));
      this.dictionary = (this.category) ? dictionaryData.category : dictionaryData.dictionary;
      this.index++;
      this.word = this.dictionary[this.index].word;
      this.pronunciation = this.dictionary[this.index].pronunciation;
      this.translation = '[ ' + this.dictionary[this.index].translation + ' ]';
      this.image = this.dictionary[this.index].image;
      this.showImage = ( this.image === 'assets/images/blank.png' ) ? false : true;
    
      const card: any = document.querySelector('div.card');
      let cardFlipState = card.style.transform;
      if(cardFlipState === 'rotateX(180deg)') this.flip = 'inactive';
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
}

  flipCard = () => {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
}
