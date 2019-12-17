import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { map } from 'rxjs/operators';
import { Verb } from '../verb';
=======
import { Verb } from '../verb';
import 'rxjs/add/operator/map';
>>>>>>> 8b393d635914e5360cd223043ed02f1ac0ede23d

const baseUrl = 'http://localhost:4000/api';

@Injectable()
export class VerbService {

  constructor( private http: HttpClient ){}

  getVerbs(){
    const uri = baseUrl + '/verbs';
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

  getVerb( verb: string ){
    const uri = baseUrl + '/verbs/' + verb;
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

  addVerb( newVerb: Verb ) {
    const uri = baseUrl + '/verbs';
    return this.http
      .post( uri, newVerb )
  }
}
