import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Verb } from './verb';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:4000/api';

@Injectable()
export class VerbService {

  constructor( private http: HttpClient ){}

  getVerbs(){
    const uri = baseUrl + '/verbs';
    return this.http
      .get( uri )
      .map( function(res){
        return res;
      });
  }

  getVerb( verb: string ){
    const uri = baseUrl + '/verbs/' + verb;
    return this.http
      .get( uri )
      .map( function(res){
        return res;
      });
  }

  addVerb( newVerb: Verb ) {
    const uri = baseUrl + '/verbs';
    return this.http
      .post( uri, newVerb )
  }
}
