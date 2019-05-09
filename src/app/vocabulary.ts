export class Vocabulary {
  category: string;
  word: string;
  translation: string;
  gender: string;
  image?: string;
  pronunciation?: string;

  constructor(){
    this.category = '';
    this.word = '';
    this.translation = '';
    this.gender = '';
    this.image = '';
    this.pronunciation = '';
  }

  setCategory( category: string ){
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
