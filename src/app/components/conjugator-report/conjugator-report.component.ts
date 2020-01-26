import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conjugator-report',
  templateUrl: './conjugator-report.component.html',
  styleUrls: ['./conjugator-report.component.css']
})
export class ConjugatorReportComponent {
  @Input() reportInfo: any;

  constructor() { }
}
