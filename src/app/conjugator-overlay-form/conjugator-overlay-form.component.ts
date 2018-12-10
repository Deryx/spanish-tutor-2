import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conjugator-overlay-form',
  templateUrl: 'conjugator-overlay-form.component.html',
  styleUrls: ['conjugator-overlay-form.component.css']
})

export class ConjugatorOverlayFormComponent {
  isVisible: boolean = true;
  numberVerbs: number;
  tense: string;

  @Output() formChange = new EventEmitter();

  constructor() { }

  onClick() {
    let overlayData = {
      isVisible: !this.isVisible,
      numberVerbs: this.numberVerbs,
      tense: this.tense
    }

    this.formChange.emit( overlayData );
  }
}
