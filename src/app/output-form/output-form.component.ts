import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-output-form',
  templateUrl: './output-form.component.html',
  styleUrls: ['./output-form.component.css']
})
export class OutputFormComponent implements OnInit {
  constructor() { }
 
  @Input() data : any = {};
 
  ngOnInit(): void {

  
  }

}
