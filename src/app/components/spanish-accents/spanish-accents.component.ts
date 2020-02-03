import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-spanish-accents',
  templateUrl: './spanish-accents.component.html',
  styleUrls: ['./spanish-accents.component.css']
})
export class SpanishAccentsComponent {
  @Input() txtbox: any;
  @Output() accentMessage = new EventEmitter<string>();

  constructor() { }


  accentClick( event ) {
    let accent = event.target.value;
    this.accentMessage.emit(accent);
  }
}
