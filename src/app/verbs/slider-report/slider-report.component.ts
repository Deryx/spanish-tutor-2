import { Component, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-verb-slider-report',
  templateUrl: './slider-report.component.html',
  styleUrls: ['./slider-report.component.css']
})
export class VerbSliderReportComponent {
  @Input() reportInfo: any;

  constructor( @Inject(DOCUMENT) private document: Document, private router: Router ) { }

  replay() {    
    this.document.location.reload();
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
