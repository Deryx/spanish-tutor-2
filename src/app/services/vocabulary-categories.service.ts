import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VocabularyCategoriesService {
  categoriesURL: any = '../assets/data/categories.json';

  constructor( private http: HttpClient ) {}

   getCategories = () => {
    return this.http
      .get( this.categoriesURL ); 
   }
}
