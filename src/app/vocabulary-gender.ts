export class VocabularyGender {
  genders: string[];

  constructor() {
    this.genders = [ 'female', 'female plural', 'male', 'male plural' ];
  }

  getGenders() {
    return this.genders;
  }
}
