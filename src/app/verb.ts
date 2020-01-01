import { Conjugation } from './conjugation';

export class Verb {
  infinitive: string;
  translation: string;
  conjugations: {};

  constructor (){
    this.infinitive ='';
    this.translation = '';
    this.conjugations = {
      'present': {
        'yo': '',
        'tu': '',
        'el': '',
        'nosotros': '',
        'els': ''
      },
      'preterite': {
        'yo': '',
        'tu': '',
        'el': '',
        'nosotros': '',
        'els': ''
      },
      'imperfect': {
        'yo': '',
        'tu': '',
        'el': '',
        'nosotros': '',
        'els': ''
      },
      'future': {
        'yo': '',
        'tu': '',
        'el': '',
        'nosotros': '',
        'els': ''
      }
    };
  }

  setInfinitive(infinitive: string){
    this.infinitive = infinitive;
  }

  setTranslation(translation: string){
    this.translation = translation;
  }

  addConjugations(conjugations: any){
    this.conjugations = conjugations;
  }
}
