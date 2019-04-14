import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titleMy: string;
  titleST: string;

  constructor() {
    this.titleMy = 'My';
    this.titleST = 'Spanish Tutor';
  }
}
