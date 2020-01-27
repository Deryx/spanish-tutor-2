import { VocabularyService } from './vocabulary.service';
import { Injectable } from '@angular/core';


@Injectable()
export class VocabularyCategoriesService {
  categories: string[] = [];

  constructor( private words: VocabularyService ) {}

  getCategories( dictionary: any[] ): string[] {  
    for(let i = 0; i < dictionary.length; i++) {
      let category = dictionary[i].category;
      if(this.categories.indexOf( category ) === -1) this.categories.push( category );
    };

    const categories = this.categories.sort();

    return categories;
  }
}
