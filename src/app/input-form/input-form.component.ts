import { Component, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: false,
  templateUrl: './input-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  @Output() newItemEvent = new EventEmitter<any>();

  onSubmit(form: NgForm) { 
    // console.log(form.value); 
   
    this.newItemEvent.emit(form.value);  
    }
}
