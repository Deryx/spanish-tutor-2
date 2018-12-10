import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
import { RandomNumberGeneratorService } from './random-number-generator.service';
import { VocabularyCategoriesService } from './vocabulary-categories.service';
import { SpanishAccentMarksComponent } from './spanish-accent-marks/spanish-accent-marks.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ConjugatorOverlayFormComponent } from './conjugator-overlay-form/conjugator-overlay-form.component';
import { VocabularyOverlayFormComponent } from './vocabulary-overlay-form/vocabulary-overlay-form.component';

const appRoutes: Routes = [
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
    SpanishAccentMarksComponent,
    OverlayComponent,
    ConjugatorOverlayFormComponent,
    VocabularyOverlayFormComponent
  ],
  imports: [
    BrowserModule,
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
