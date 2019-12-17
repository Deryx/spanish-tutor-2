import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { map } from 'rxjs/operators';
import { Vocabulary } from '../vocabulary';
=======
import { Vocabulary } from '../vocabulary';
import 'rxjs/add/operator/map';
>>>>>>> 8b393d635914e5360cd223043ed02f1ac0ede23d

const baseUrl = 'http://localhost:4000/api';

@Injectable()
export class VocabularyService {
  constructor( private http: HttpClient ){}

  getDictionary(){
    const uri = baseUrl + '/words';
    return this.http
      .get( uri )
<<<<<<< HEAD
      .pipe(map( function(res){
        return res;
      }));
=======
      .map( function(res){
        return res;
      });
>>>>>>> 8b393d635914e5360cd223043ed02f1ac0ede23d
  }

  getCategory( category: string ){
    const uri = baseUrl + '/words/' + category;
    return this.http
      .get( uri )
<<<<<<< HEAD
      .pipe(map( function(res){
        return res;
      }));
=======
      .map( function(res){
        return res;
      });
>>>>>>> 8b393d635914e5360cd223043ed02f1ac0ede23d
  }

  addWord( newWord: Vocabulary ){
    const uri = baseUrl + '/words';
    return this.http
      .post( uri, newWord )
  }
}
