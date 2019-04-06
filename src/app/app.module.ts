import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortablejsModule } from 'angular-sortablejs';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { LetterPronunciationComponent } from './components/letter-pronunciation/letter-pronunciation.component';
import { VocabularySliderComponent } from './components/vocabulary-slider/vocabulary-slider.component';
import { VocabularyQuizComponent } from './components/vocabulary-quiz/vocabulary-quiz.component';
import { VocabularyCompletionComponent } from './components/vocabulary-completion/vocabulary-completion.component';
import { VocabularyScrambleComponent } from './components/vocabulary-scramble/vocabulary-scramble.component';
import { VerbConjugatorComponent } from './components/verb-conjugator/verb-conjugator.component';
import { VocabularyFlashcardComponent } from './components/vocabulary-flashcard/vocabulary-flashcard.component';
import { VerbFlashcardComponent } from './components/verb-flashcard/verb-flashcard.component';
import { VocabularyInputComponent } from './components/vocabulary-input/vocabulary-input.component';
import { VerbInputComponent } from './components/verb-input/verb-input.component';

import { VocabularyService } from './services/vocabulary.service';
import { VerbService } from './services/verb.service';
import { RandomNumberGeneratorService } from './services/random-number-generator.service';
import { VocabularyCategoriesService } from './services/vocabulary-categories.service';
import { OverlayComponent } from './components/overlay/overlay.component';
import { ConjugatorOverlayFormComponent } from './components/conjugator-overlay-form/conjugator-overlay-form.component';
import { VocabularyOverlayFormComponent } from './components/vocabulary-overlay-form/vocabulary-overlay-form.component';
import { SpanishAccentCodesComponent } from './components/spanish-accent-codes/spanish-accent-codes.component';

const appRoutes: Routes = [
  { path: 'letter-pronunciation', component: LetterPronunciationComponent },
  { path: 'verb-input', component: VerbInputComponent },
  { path: 'vocabulary-completion', component: VocabularyCompletionComponent },
  { path: 'vocabulary-flashcard', component: VocabularyFlashcardComponent },
  { path: 'vocabulary-input', component: VocabularyInputComponent },
  { path: 'vocabulary-quiz', component: VocabularyQuizComponent },
  { path: 'vocabulary-scramble', component: VocabularyScrambleComponent },
  { path: 'vocabulary-slider', component: VocabularySliderComponent },
  { path: 'verb-flashcard', component: VerbFlashcardComponent },
  { path: 'verb-conjugator', component: VerbConjugatorComponent },
  { path: 'verb-input', component: VerbInputComponent }
];

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
    VerbInputComponent,
    OverlayComponent,
    ConjugatorOverlayFormComponent,
    VocabularyOverlayFormComponent,
    SpanishAccentCodesComponent,
    LetterPronunciationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SortablejsModule.forRoot({
      animation: 200
    }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [VocabularyService, VerbService, RandomNumberGeneratorService, VocabularyCategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
