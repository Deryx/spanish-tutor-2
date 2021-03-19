import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VerbService {
  tensesURL: any = 'assets/data/tenses.json';
  verbsURL: any = 'assets/data/verbs.json';
  conjugationsURL: any = 'assets/data/conjugations.json';

    constructor( private http: HttpClient ){}

  getTenses = () => {
    return this.http
      .get( this.tensesURL ); 
  }

  getVerbs = () => {
    return this.http
      .get( this.verbsURL );
  }

  getConjugations = () => {
    return this.http
      .get( this.conjugationsURL );
  }
}
