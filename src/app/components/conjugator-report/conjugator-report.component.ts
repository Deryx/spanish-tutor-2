import { Component, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-conjugator-report',
  templateUrl: './conjugator-report.component.html',
  styleUrls: ['./conjugator-report.component.css']
})
export class ConjugatorReportComponent {
  @Input() reportInfo: any;

  constructor( @Inject(DOCUMENT) private document: Document, private router: Router ) {}

  replay() {    
    this.document.location.reload();
  }

  quit() {
    this.router.navigateByUrl('');
  }
}
