import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { VocabularySliderComponent } from './vocabulary/slider/slider.component';
import { QuizComponent } from './vocabulary/quiz/quiz.component';
import { CompletionComponent } from './vocabulary/completion/completion.component';
import { ScrambleComponent } from './vocabulary/scramble/scramble.component';
import { ConjugatorComponent } from './verbs/conjugator/conjugator.component';
import { VocabularyFlashcardComponent } from './vocabulary/flashcard/flashcard.component';
import { VerbFlashcardComponent } from './verbs/flashcard/flashcard.component';

import { VocabularyService } from './vocabulary/services/vocabulary.service';
import { VerbService } from './verbs/services/verb.service';
import { RandomNumberGeneratorService } from './services/random-number-generator.service';
import { VocabularyCategoriesService } from './vocabulary/services/vocabulary-categories.service';
import { OverlayComponent } from './components/overlay/overlay.component';
import { LongOverlayComponent } from './components/long-overlay/long-overlay.component';
import { ConjugatorOverlayFormComponent } from './verbs/conjugator-overlay-form/conjugator-overlay-form.component';
import { VocabularyOverlayFormComponent } from './vocabulary/overlay-form/overlay-form.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ReportComponent } from './components/report/report.component';
import { ConjugatorReportComponent } from './verbs/conjugator-report/conjugator-report.component';
import { VocabularySliderReportComponent } from './vocabulary/slider-report/slider-report.component';
import { SpanishAccentsComponent } from './components/spanish-accents/spanish-accents.component';
import { VerbSliderComponent } from './verbs/slider/slider.component';
import { FillInComponent } from './vocabulary/fill-in/fill-in.component';
import { VerbOverlayFormComponent } from './verbs/overlay-form/overlay-form.component';
import { VerbSliderReportComponent } from './verbs/slider-report/slider-report.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'letter-pronunciation', component: LetterPronunciationComponent },
  { path: 'completion', component: CompletionComponent },
  { path: 'vocabulary-flashcard', component: VocabularyFlashcardComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'scramble', component: ScrambleComponent },
  { path: 'vocabulary-slider', component: VocabularySliderComponent },
  { path: 'verb-flashcard', component: VerbFlashcardComponent },
  { path: 'conjugator', component: ConjugatorComponent },
  { path: 'verb-slider', component: VerbSliderComponent },
  { path: 'fill-in', component: FillInComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MarqueeComponent,
    VocabularySliderComponent,
    QuizComponent,
    CompletionComponent,
    ScrambleComponent,
    ConjugatorComponent,
    VocabularyFlashcardComponent,
    VerbFlashcardComponent,
    LongOverlayComponent,
    OverlayComponent,
    ConjugatorOverlayFormComponent,
    VocabularyOverlayFormComponent,
    LetterPronunciationComponent,
    HomeComponent,
    CardComponent,
    ReportComponent,
    ConjugatorReportComponent,
    VocabularySliderReportComponent,
    SpanishAccentsComponent,
    VerbSliderComponent,
    FillInComponent,
    VerbOverlayFormComponent,
    VerbSliderReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [VocabularyService, VerbService, RandomNumberGeneratorService, VocabularyCategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
