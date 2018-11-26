import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  siteLinks: { link: string, ref: string }[];

  constructor() {
    this.siteLinks = [
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

  ngOnInit() {
    let subMenu = document.getElementById( 'subMenu' );
    for(let i = 0; i < this.siteLinks.length; i++) {
      let li = document.createElement('li');
      let liText = this.createLink( this.siteLinks[i].link, this.siteLinks[i].ref );

      li.appendChild( liText );
      subMenu.appendChild( li );
    }
  }

  createLink = function( text: string, href: string ) {
    let newLink = document.createElement('a');
    let linkText = document.createTextNode( text );
    newLink.setAttribute( 'href', href );
    newLink.appendChild( linkText );

    return newLink;
  }

}
