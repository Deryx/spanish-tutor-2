import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';
import { Vocabulary } from '../../vocabulary';
import { VocabularyGender } from '../../vocabulary-gender'
import { VocabularyCategoriesService } from '../../services/vocabulary-categories.service';

@Component({
  selector: 'app-vocabulary-input',
  templateUrl: './vocabulary-input.component.html',
  styleUrls: ['./vocabulary-input.component.css']
})
export class VocabularyInputComponent implements OnInit {
  category = '';
  newCategory = '';
  word = '';
  translation = '';
  gender =  '';
  image = '';
  pronunciation = '';
  dictionary: any;

  animationState = 'left';
  buttonText: string = 'show accents';

  accent: string;

  genders = new VocabularyGender();

  vocabulary = new Vocabulary();

  constructor( private words: VocabularyService, private vocabularyCategories: VocabularyCategoriesService ){}

  ngOnInit(){
    this.words.getDictionary()
    .subscribe(
      data => {
        this.dictionary = data;
      },
      error => console.log('Error: ', error),
      () => {
        let categorySelect = document.getElementById( 'category' );
        let categoryOptions: string[] = this.vocabularyCategories.getCategories( this.dictionary.Items );
        categoryOptions.sort();
    
        let firstOption = document.createElement( 'option' );
        firstOption.value = '';
        firstOption.disabled = true;
        firstOption.selected = true;
        firstOption.innerHTML = 'SELECT A CATEGORY';
        categorySelect.appendChild( firstOption );
    
        for(let i = 0; i < categoryOptions.length; i++) {
          let category = categoryOptions[i];
    
          let option = document.createElement( 'option' );
          option.value = category;
          option.innerHTML = category.charAt(0).toUpperCase() + category.slice(1);
    
          categorySelect.appendChild( option );
        }
          
        let lastOption = document.createElement( 'option' );
        lastOption.value = 'other';
        lastOption.innerHTML = 'Other';
      
        categorySelect.appendChild( lastOption );
      
        let genderSelect = document.getElementById( 'gender' );
        let genderOptions = this.genders.getGenders();
      
        let genderFirstOption = document.createElement( 'option' );
        genderFirstOption.value = '';
        genderFirstOption.disabled = true;
        genderFirstOption.selected = true;
        genderFirstOption.innerHTML = 'SELECT A GENDER ...';
        genderSelect.appendChild( genderFirstOption );
      
        for(let i = 0; i < genderOptions.length; i++) {
          let gender = genderOptions[i];
      
          let option = document.createElement( 'option' );
          option.value = gender;
          option.innerHTML = gender.charAt(0).toUpperCase() + gender.slice(1);
      
          genderSelect.appendChild( option );
        }
      });
  }

  getCaretPosition(textfield) {
    let caretPosition: number = 0;
    if(document.selection) {
      textfield.focus();
      let selection = textfield.selection.createRange();
      selection.moveStart('character', -selection.value.length);
      caretPosition = selection.text.length;
    } else if(textfield.selectionStart || textfield.selectionStart === '0') {
      caretPosition = textfield.selectionStart;
    }

    return caretPosition;
  }

  placeAccent(txtbox, $event) {
    let inputBox = <HTMLElement>document.getElementById(txtbox);
    this.accent = $event;
    let currentPosition = this.getCaretPosition(inputBox);
    let originalValue = inputBox.nodeValue;
    let newValue = originalValue.substring(0, currentPosition) + this.accent + originalValue.substring(currentPosition);
    inputBox.value = newValue;
  }


  resetForm(){
    this.category = '';
    this.newCategory = '';
    this.word = '';
    this.translation = '';
    this.gender =  '';
    this.image = '';
    this.pronunciation = '';
  }

  onSubmit(){
    this.vocabulary.setCategory( this.category );
    if( this.newCategory ) this.vocabulary.setCategory( this.newCategory.toLowerCase() );
    this.vocabulary.setWord( this.word );
    this.vocabulary.setTranslation( this.translation );
    this.vocabulary.setGender( this.gender );

    let image: any = this.image.match(/fakepath\\(.*)/);
    let folder = 'assets/images/';
    image = null || folder + image[1];

    this.vocabulary.setImage( image );
    this.vocabulary.setPronunciation( this.pronunciation );

    this.words.addWord( this.vocabulary )
      .subscribe();

    this.resetForm();
  }

  toggleAccents() {
    this.animationState = this.animationState === 'left' ? 'right' : 'left';
    this.buttonText = this.animationState === 'left' ? 'show accents' : 'hide accents';
  }
}
