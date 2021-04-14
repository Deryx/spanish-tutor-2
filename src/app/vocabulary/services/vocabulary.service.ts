import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VocabularyService {
  dictionaryURL: any = 'assets/data/vocabulary.json';

  constructor( private http: HttpClient ){}

  getDictionary = () => {
    return this.http
      .get( this.dictionaryURL ); 
  }
}