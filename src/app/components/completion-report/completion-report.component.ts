import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-completion-report',
  templateUrl: './completion-report.component.html',
  styleUrls: ['./completion-report.component.css']
})
export class CompletionReportComponent {
  @Input() report: any;
  
  constructor() { }
}
