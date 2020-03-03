import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Verb } from '../verb';

const apiUrl: string = 'https://iu0476vb47.execute-api.us-east-2.amazonaws.com/v1';

@Injectable()
export class VerbService {

  constructor( private http: HttpClient ){}

  getVerbs(){
    const uri = apiUrl + '/verbs';
    return this.http
      .get( uri )
      .pipe(map( function(res){
        return res;
      }));
  }

  getVerb( verb: string ){
    const uri = apiUrl + '/verbs/' + verb;
    return this.http
      .get( uri )
      .pipe(map( function(res){
        return res;
      }));
  }

  addVerb( newVerb: Verb ) {
    const uri = apiUrl + '/verbs';
    return this.http
      .post( uri, newVerb )
  }
}
