import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-output-form',
  standalone: false,
  templateUrl: './output-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./output-form.component.css']
})
export class OutputFormComponent implements OnInit {
  constructor() { }
 
  @Input() data : any = {};
 
  ngOnInit(): void {

  
  }

}
