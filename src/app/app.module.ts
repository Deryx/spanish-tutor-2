import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ReportComponent } from './components/report/report.component';
import { ConjugatorReportComponent } from './components/conjugator-report/conjugator-report.component';
import { SliderReportComponent } from './components/slider-report/slider-report.component';
import { SpanishAccentsComponent } from './components/spanish-accents/spanish-accents.component';
import { VerbSliderComponent } from './components/verb-slider/verb-slider.component';
import { VocabularyFillInComponent } from './components/vocabulary-fill-in/vocabulary-fill-in.component';
import { VerbOverlayFormComponent } from './components/verb-overlay-form/verb-overlay-form.component';
import { VerbSliderReportComponent } from './components/verb-slider-report/verb-slider-report.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'letter-pronunciation', component: LetterPronunciationComponent },
  { path: 'vocabulary-completion', component: VocabularyCompletionComponent },
  { path: 'vocabulary-flashcard', component: VocabularyFlashcardComponent },
  { path: 'vocabulary-input', component: VocabularyInputComponent },
  { path: 'vocabulary-quiz', component: VocabularyQuizComponent },
  { path: 'vocabulary-scramble', component: VocabularyScrambleComponent },
  { path: 'vocabulary-slider', component: VocabularySliderComponent },
  { path: 'verb-flashcard', component: VerbFlashcardComponent },
  { path: 'verb-conjugator', component: VerbConjugatorComponent },
  { path: 'verb-input', component: VerbInputComponent },
  { path: 'verb-slider', component: VerbSliderComponent },
  { path: 'vocabulary-fill-in', component: VocabularyFillInComponent }

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
    LetterPronunciationComponent,
    HomeComponent,
    CardComponent,
    ReportComponent,
    ConjugatorReportComponent,
    SliderReportComponent,
    SpanishAccentsComponent,
    VerbSliderComponent,
    VocabularyFillInComponent,
    VerbOverlayFormComponent,
    VerbSliderReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "http://localhost:5000/graphql"
        })
      }
    },
    deps: [HttpLink]
  }, VocabularyService, VerbService, RandomNumberGeneratorService, VocabularyCategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
