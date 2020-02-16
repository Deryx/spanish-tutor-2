import { Component, OnInit } from '@angular/core';
import { VocabularyCategories } from '../../vocabulary-categories';
import { VocabularyService } from '../../services/vocabulary.service';
import { VocabularyCategoriesService } from '../../services/vocabulary-categories.service';
import { FlipAnimation } from '../../../animations/flip.animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vocabulary-flashcard',
  templateUrl: './vocabulary-flashcard.component.html',
  styleUrls: ['./vocabulary-flashcard.component.css'],
  providers: [VocabularyCategoriesService],
  animations: FlipAnimation.animations
})

export class VocabularyFlashcardComponent implements OnInit {
  flip = 'inactive';
  word: string = 'word';
  category: string;
  image: string;
  pronunciation: string = 'pronunciation';
  translation: string = '[ translation ]';
  categories = new VocabularyCategories();
  vocabularyCategory: any;
  index: number;
  dictionary: any;
  showImage: boolean = true;

  constructor( private words: VocabularyService, private vocabularyCategories: VocabularyCategoriesService ) { }

  ngOnInit() {
    this.words.getDictionary()
    .subscribe(
      data => {
        this.dictionary = data;
      },
      error => console.log('Error: ', error),
      () => {
        let categorySelect = document.getElementById( 'category' );
        let categoryOptions: string[] = this.vocabularyCategories.getCategories( this.dictionary.Items );
    
        let firstOption = document.createElement( 'option' );
        firstOption.disabled = true;
        firstOption.selected = true;
        firstOption.innerHTML = 'SELECT A CATEGORY';
        categorySelect.appendChild( firstOption );

        let secondOption = document.createElement( 'option' );
        secondOption.value = '';
        secondOption.innerHTML = 'All';
        categorySelect.appendChild( secondOption );
    
        for(let i = 0; i < categoryOptions.length; i++) {
          let category = categoryOptions[i];
    
          let option = document.createElement( 'option' );
          option.value = category;
          option.innerHTML = category.charAt(0).toUpperCase() + category.slice(1);
    
          categorySelect.appendChild( option );
        }
    });
  }

  changeCategory(){
    const dataCommand:any = ( this.category === '' ) ? this.words.getDictionary() : this.words.getCategory( this.category );
    dataCommand
    .subscribe(
        data => {
          this.vocabularyCategory = data;
          this.vocabularyCategory = this.vocabularyCategory.Items;
          this.vocabularyCategory.sort((a, b) => {
            const wordA = a.word;
            const wordB = b.word;

            let comparison = 0;
            if(wordA > wordB) {
              comparison = 1;
            } else if (wordA < wordB) {
              comparison = -1;
            }

            return comparison;
          });
          this.index = 0;
          this.word = this.vocabularyCategory[this.index].word;
          this.pronunciation = this.vocabularyCategory[this.index].pronunciation;
          this.translation = '[ ' + this.vocabularyCategory[this.index].translation + ' ]';
          this.image = this.vocabularyCategory[this.index].image;
          this.showImage = ( this.image === 'assets/images/blank.png' ) ? false : true;
        }
      )
  }

  next() {
    this.index++;
    this.word = this.vocabularyCategory[this.index].word;
    this.pronunciation = this.vocabularyCategory[this.index].pronunciation;
    this.translation = '[ ' + this.vocabularyCategory[this.index].translation + ' ]';
    this.image = this.vocabularyCategory[this.index].image;
    this.showImage = ( this.image === 'assets/images/blank.png' ) ? false : true;
  
    const card: any = document.querySelector('div.card');
    let cardFlipState = card.style.transform;
    if(cardFlipState === 'rotateX(180deg)') this.flip = 'inactive';
}

  flipCard() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
}
