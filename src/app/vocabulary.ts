export class Vocabulary {
  category: Number;
  word: string;
  translation: string;
  gender: string;
  image?: string;
  pronunciation?: string;

  constructor(){
    this.category = 0;
    this.word = '';
    this.translation = '';
    this.gender = '';
    this.image = '';
    this.pronunciation = '';
  }

  setCategory( category: Number ){
    this.category = category;
  }

  setWord( word: string ){
    this.word = word;
  }

  setTranslation( translation: string ){
    this.translation = translation;
  }

  setGender( gender: string ){
    this.gender = gender;
  }

  setImage( image: string ){
    this.image = image;
  }

  setPronunciation( pronunciation: string ){
    this.pronunciation = pronunciation;
  }
}
