import { Conjugation } from './conjugation';

export class Verb {
  infinitive: string;
  translation: string;
  conjugations: Conjugation[];

  constructor (){
    this.infinitive ='';
    this.translation = '';
    this.conjugations = [];
  }

  setInfinitive(infinitive: string){
    this.infinitive = infinitive;
  }

  setTranslation(translation: string){
    this.translation = translation;
  }

  addConjugation(conjugation: Conjugation){
    this.conjugations.push(conjugation);
  }
}
