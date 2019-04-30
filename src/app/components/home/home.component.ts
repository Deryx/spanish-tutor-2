import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pronunciationCard: any;
  verbFlashcardCard: any;
  vocabularyFlashcardCard: any;
  verbConjugatorCard: any;
  vocabularyCompletionCard: any;
  vocabularyQuizCard: any;
  vocabularyScrambleCard: any;
  vocabularySliderCard: any;

  constructor() {
    this.pronunciationCard = {
      image: '',
      header: 'letter pronunciation',
      summary: ''
    }
    this.verbFlashcardCard = {
      image: '',
      header: 'verb flashcard',
      summary: 'Before you dive into the Verb Conjugator, study over 100 most commonly used spanish verbs with the Verb Flashcard.'
    }
    this.vocabularyFlashcardCard = {
      image: '',
      header: 'vocabulary flashcard',
      summary: 'Want to study spanish vocabulary before you take the Vocabulary Quiz or play the Vocabulary Slider, Vocabulary Scramble or Vocabulary Completion games? Study up with the Vocabulary Flashcard'
    }
    this.verbConjugatorCard = {
      image: '',
      header: 'verb conjugator',
      summary: 'Studied the most commonly used spanish verbs with the Verb Flashcard and want to test your skills? Well, test your skills with the Verb Conjugator!'
    }
    this.vocabularyCompletionCard = {
      image: '',
      header: 'vocabulary Completion',
      summary: 'Vocabulary Scramble too easy because all of the letters are there? Try your luck with Vocabulary Completion!'
    }
    this.vocabularyQuizCard = {
      image: '',
      header: 'vocabulary quiz',
      summary: 'Studied the Vocabulary Flashcards and want to perform a standard test of your spanish vocabulary skills? Go to the Vocabulary Quiz!'
    }
    this.vocabularyScrambleCard = {
      image: '',
      header: 'vocabulary scramble',
      summary: 'Think you have a handle on your spanish vocabulary and want to test your ability to spell the words? Then try the Vocabulary Scramble!'
    }
    this.vocabularySliderCard = {
      image: '',
      header: 'vocabulary slider',
      summary: 'Want to test your knowledge of spanish vocabulary by matching spanish words with their corresponding translation? Then play with the Vocabulary Slider.'
    }
   }
}
