export class VocabularyCategories {
  categories: string[];

  constructor() {
    this.categories = [ 'animals', 'body', 'clothes', 'colors', 'family', 'food', 'household', 'nature', 'numbers', 'professions', 'countries', 'transportation', 'places' ];
  }

  getCategories() {
    return this.categories;
  }

  addCategory( category: string ) {
    this.categories.push( category );
  }
}
