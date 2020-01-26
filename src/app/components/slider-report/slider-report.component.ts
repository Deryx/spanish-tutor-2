import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-report',
  templateUrl: './slider-report.component.html',
  styleUrls: ['./slider-report.component.css']
})
export class SliderReportComponent {
  @Input() reportInfo: any;

  constructor() { }
}
