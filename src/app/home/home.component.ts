import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  animationState = 'scrollDown';
  pronunciationCard: any;
  verbFlashcardCard: any;
  vocabularyFlashcardCard: any;
  verbConjugatorCard: any;
  vocabularyCompletionCard: any;
  vocabularyQuizCard: any;
  vocabularyScrambleCard: any;
  vocabularySliderCard: any;
  titleMy: string;
  titleST: string;

  constructor() {
    this.titleMy = 'My';
    this.titleST = 'SpanishTutor';

    this.pronunciationCard = {
      image: 'assets/images/home/letter-pronunciation.png',
      header: 'letter pronunciation',
      summary: ''
    }
    this.verbFlashcardCard = {
      image: 'assets/images/home/verb-flashcard.png',
      header: 'verb flashcard',
      summary: 'Before you dive into the Verb Conjugator, study over 100 most commonly used spanish verbs with the Verb Flashcard.'
    }
    this.vocabularyFlashcardCard = {
      image: 'assets/images/home/vocabulary-flashcard.png',
      header: 'vocabulary flashcard',
      summary: 'Want to study spanish vocabulary before you take the Vocabulary Quiz or play the Vocabulary Slider, Vocabulary Scramble or Vocabulary Completion games? Study up with the Vocabulary Flashcard'
    }
    this.verbConjugatorCard = {
      image: 'assets/images/home/verb-conjugator.png',
      header: 'verb conjugator',
      summary: 'Studied the most commonly used spanish verbs with the Verb Flashcard and want to test your skills? Well, test your skills with the Verb Conjugator!'
    }
    this.vocabularyCompletionCard = {
      image: 'assets/images/home/vocabulary-completion.png',
      header: 'vocabulary Completion',
      summary: 'Vocabulary Scramble too easy because all of the letters are there? Try your luck with Vocabulary Completion!'
    }
    this.vocabularyQuizCard = {
      image: 'assets/images/home/vocabulary-quiz.png',
      header: 'vocabulary quiz',
      summary: 'Studied the Vocabulary Flashcards and want to perform a standard test of your spanish vocabulary skills? Go to the Vocabulary Quiz!'
    }
    this.vocabularyScrambleCard = {
      image: 'assets/images/home/vocabulary-scramble.png',
      header: 'vocabulary scramble',
      summary: 'Think you have a handle on your spanish vocabulary and want to test your ability to spell the words? Then try the Vocabulary Scramble!'
    }
    this.vocabularySliderCard = {
      image: 'assets/images/home/vocabulary-slider.png',
      header: 'vocabulary slider',
      summary: 'Want to test your knowledge of spanish vocabulary by matching spanish words with their corresponding translation? Then play with the Vocabulary Slider.'
    }
  }
}
