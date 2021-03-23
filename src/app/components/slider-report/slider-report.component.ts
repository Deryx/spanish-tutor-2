import { Component, Input, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-slider-report',
  templateUrl: './slider-report.component.html',
  styleUrls: ['./slider-report.component.css']
})
export class SliderReportComponent implements OnInit {
  @Input() reportInfo: any;

  ngOnInit() {
    const report: any = document.querySelector( 'section > div' );

    report.style.marginTop = "50rem";
  }

  constructor( @Inject(DOCUMENT) private document: Document, private router: Router ) { }

  replay() {    
    this.document.location.reload();
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
