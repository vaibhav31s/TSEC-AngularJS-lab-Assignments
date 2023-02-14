import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  @Output() newItemEvent = new EventEmitter<any>();

  onSubmit(form: NgForm) { 
    // console.log(form.value); 
   
    this.newItemEvent.emit(form.value);  
    }
}
