import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['cardImage', 'cardHeader', 'cardSummary']
})
export class CardComponent {
  @Input() cardImage: string;
  @Input() cardHeader: string;
  @Input() cardSummary: string;

  constructor() {}
}
