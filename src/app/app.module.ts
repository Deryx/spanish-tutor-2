import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { VocabularySliderComponent } from './vocabulary-slider/vocabulary-slider.component';
import { VocabularyQuizComponent } from './vocabulary-quiz/vocabulary-quiz.component';
import { VocabularyCompletionComponent } from './vocabulary-completion/vocabulary-completion.component';
import { VocabularyScrambleComponent } from './vocabulary-scramble/vocabulary-scramble.component';
import { VerbConjugatorComponent } from './verb-conjugator/verb-conjugator.component';
import { VocabularyFlashcardComponent } from './vocabulary-flashcard/vocabulary-flashcard.component';
import { VerbFlashcardComponent } from './verb-flashcard/verb-flashcard.component';
import { VocabularyInputComponent } from './vocabulary-input/vocabulary-input.component';
import { VerbInputComponent } from './verb-input/verb-input.component';

import { VocabularyService } from './vocabulary.service';
import { VerbService } from './verb.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MarqueeComponent,
    VocabularySliderComponent,
    VocabularyQuizComponent,
    VocabularyCompletionComponent,
    VocabularyScrambleComponent,
    VerbConjugatorComponent,
    VocabularyFlashcardComponent,
    VerbFlashcardComponent,
    VocabularyInputComponent,
    VerbInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VocabularyService, VerbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
