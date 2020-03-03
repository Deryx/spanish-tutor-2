import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Vocabulary } from '../vocabulary';

const apiUrl: string = 'https://iu0476vb47.execute-api.us-east-2.amazonaws.com/v1';

@Injectable()
export class VocabularyService {
  constructor( private http: HttpClient ){}

  getDictionary(){
    const uri = apiUrl + '/vocabulary';
    return this.http
      .get( uri )
      .pipe(map( 
        function(res){
          return res;
      }));
  }

  getCategory( category: string ){
    const uri = apiUrl + '/vocabulary/' + category;
    return this.http
      .get( uri )
      .pipe(map( 
        function(res){
          return res;
      })
    );
  }

  addWord( newWord: Vocabulary ){
    const uri = apiUrl + '/vocabulary';
    return this.http
      .post( uri, newWord )
  }
}
