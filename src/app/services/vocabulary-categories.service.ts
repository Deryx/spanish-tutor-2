import { Injectable } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

@Injectable()
export class VocabularyCategoriesService {
  
  constructor( private apollo: Apollo ) {}

   Categories: any = gql`
    query categories {
        categories {
          id,
          category
        }
    }`;
  }
