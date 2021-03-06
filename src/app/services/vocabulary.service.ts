import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vocabulary } from '../vocabulary';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:4000/api';

@Injectable()
export class VocabularyService {
  constructor( private http: HttpClient ){}

  getDictionary(){
    const uri = baseUrl + '/words';
    return this.http
      .get( uri )
      .map( function(res){
        return res;
      });
  }

  getCategory( category: string ){
    const uri = baseUrl + '/words/' + category;
    return this.http
      .get( uri )
      .map( function(res){
        return res;
      });
  }

  addWord( newWord: Vocabulary ){
    const uri = baseUrl + '/words';
    return this.http
      .post( uri, newWord )
  }
}
