import { Injectable } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class VocabularyService {

  constructor( private apollo: Apollo ){}

  Dictionary: any = gql`
    query dictionary { 
        dictionary {
          id,
          word,
          translation,
          pronunciation,
          category,
          gender,
          image
        }
      }`

  Category: any = gql`
    query category($category: Int!) {
      category(category: $category) {
          id,
          word,
          translation,
          pronunciation,
          category,
          gender,
          image
      }
    }`

  Word: any = gql`
    query word($word: String!) {
      word(word: $word) {
          id,
          word,
          translation,
          pronunciation,
          category,
          gender,
          image
      }
    }`

  CreateWord: any = gql`
    mutation ($word: String!, $translation: String!, $pronunciation: String!, $category: Int!, $gender: String!, $image: String!) {
      createWord(word: $word, translation: $translation, pronunciation: $pronunciation, category: $category, gender: $gender, image: $image) {
        word,
        translation,
        pronunciation,
        category,
        gender,
        image
      }
    }`
}