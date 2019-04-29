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
   }
}
