import { Injectable } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class VerbService {
  verbs: any;
  verb: any;

  constructor( private apollo: Apollo ){}

  Tenses: any = gql`
    query tenses {
      tenses {
        id,
        tense
      }
    }`

  Verbs: any = gql`
    query verbs {
      verbs {
        id,
        infinitive,
        translation,
        pronunciation
      }
    }`

  Verb: any = gql`
    query verb($id: Int!) {
      verb(id: $id) {
        id,
        infinitive,
        translation,
        pronunciation
      }
    }`

  VerbId: any = gql`
    query verbId($verb: String!) {
      verbId(verb: $verb) {
        id
      }
    }`

  CreateVerb: any = gql`
    mutation ($infinitive: String!, $translation: String!, $pronunciation: String!) {
      createVerb(infinitive: $infinitive, translation: $translation, pronunciation: $pronunciation) {
        infinitive,
        translation,
        pronunciation
      }
    }`

  Conjugations: any = gql`
    query conjugations($verb: Int!) {
      conjugations(verb: $verb) {
        verb,
        tense,
        yo,
        tu,
        el,
        nosotros,
        els
      }
    }`

  CreateConjugation: any = gql`
    mutation ($verb: Int!, $tense: Int!, $yo: String!, $tu: String!, $el: String!, $nosotros: String!, $els: String!) {
      createConjugation(verb: $verb, tense: $tense, yo: $yo, tu: $tu, el: $el, nosotros: $nosotros, els: $els) {
        verb,
        tense,
        yo,
        tu,
        el,
        nosotros,
        els
      }
    }`
}
