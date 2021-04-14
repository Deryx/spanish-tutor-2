import { Component, Input, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-vocabulary-slider-report',
  templateUrl: './slider-report.component.html',
  styleUrls: ['./slider-report.component.css']
})
export class VocabularySliderReportComponent implements OnInit {
  @Input() reportInfo: any;

  ngOnInit() {
    const longOverlay: any = document.querySelector( '#long-overlay' );
    const report: any = document.querySelector( 'section > div' );

    if(longOverlay) {
      report.style.marginTop = "60rem";
    } 
  }

  constructor( @Inject(DOCUMENT) private document: Document, private router: Router ) { }

  replay() {    
    this.document.location.reload();
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
