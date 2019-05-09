import { Component, Input } from '@angular/core';
import { SideSlideAnimation } from '../../../animations/side.slide.animation';

@Component({
  selector: 'app-spanish-accent-codes',
  templateUrl: './spanish-accent-codes.component.html',
  styleUrls: ['./spanish-accent-codes.component.css'],
  animations: [SideSlideAnimation]
})
export class SpanishAccentCodesComponent {
  @Input() animationState: string;

  constructor() { }
}
