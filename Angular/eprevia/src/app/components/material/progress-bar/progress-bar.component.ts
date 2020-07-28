import { Component, OnInit, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  
  @Input() color: ThemePalette = 'warn';  
  @Input() mode: ProgressBarMode;
  @Input() value;
  @Input() bufferValue;

  constructor() { }

  ngOnInit(): void {
  }

}
