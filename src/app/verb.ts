import { Conjugation } from './conjugation';

export class Verb {
  infinitive: string;
  translation: string;
  pronunciation: string;

  constructor (){
    this.infinitive ='';
    this.translation = '';
    this.pronunciation = '';
  }

  setInfinitive(infinitive: string){
    this.infinitive = infinitive;
  }

  setTranslation(translation: string){
    this.translation = translation;
  }

  setPronunciation(pronunciation: string){
    this.pronunciation = pronunciation;
  }
}
