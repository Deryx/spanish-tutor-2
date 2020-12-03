import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verb-slider-report',
  templateUrl: './verb-slider-report.component.html',
  styleUrls: ['./verb-slider-report.component.css']
})
export class VerbSliderReportComponent {
  @Input() reportInfo: any;
  
  constructor() { }
}
