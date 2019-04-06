import { Component } from '@angular/core';
import { SlideInOutAnimation } from '../../../animations/slide.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [SlideInOutAnimation]
})

export class MenuComponent {
  animationState = 'top';
  showCloseIcon: boolean = false;

  siteLinks: { link: string, ref: string }[];

  constructor() {
    this.siteLinks = [
      { 'link': 'letter pronunciation', 'ref': '/letter-pronunciation'},
      { 'link': 'verb flashcard', 'ref': '/verb-flashcard'},
      { 'link': 'vocabulary flashcard', 'ref': '/vocabulary-flashcard'},
      { 'link': 'verb conjugator', 'ref': '/verb-conjugator'},
      { 'link': 'vocabulary completion', 'ref': 'vocabulary-completion'},
      { 'link': 'vocabulary quiz', 'ref': '/vocabulary-quiz'},
      { 'link': 'vocabulary scramble', 'ref': '/vocabulary-scramble'},
      { 'link': 'vocabulary slider', 'ref': '/vocabulary-slider'},
      { 'link': 'verb input', 'ref': '/verb-input'},
      { 'link': 'vocabulary input', 'ref': '/vocabulary-input'}
    ]
  }

  createLink = function( text: string, href: string ) {
    let newLink = document.createElement('a');
    let linkText = document.createTextNode( text );
    newLink.setAttribute( 'href', href );
    newLink.appendChild( linkText );

    return newLink;
  }

  toggleShowMenu() {
    this.animationState = this.animationState === 'top' ? 'bottom' : 'top';
    this.showCloseIcon = this.showCloseIcon === false ? true : false;
  }
}
