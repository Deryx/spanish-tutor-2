import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Verb } from '../verb';

const baseUrl = 'http://localhost:4000/api';

@Injectable()
export class VerbService {

  constructor( private http: HttpClient ){}

  getVerbs(){
    const uri = baseUrl + '/verbs';
    return this.http
      .get( uri )
      .pipe(map( function(res){
        return res;
      }));
  }

  getVerb( verb: string ){
    const uri = baseUrl + '/verbs/' + verb;
    return this.http
      .get( uri )
      .pipe(map( function(res){
        return res;
      }));
  }

  addVerb( newVerb: Verb ) {
    const uri = baseUrl + '/verbs';
    return this.http
      .post( uri, newVerb )
  }
}
