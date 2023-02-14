import { Component } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
Myname: string = "";

showValue(event: any) {
 console.log(event.target.value);
}

hello(event: any){
  console.log(event);
}
  first_name: string = '';
  setFirstName(first_name:any) {
    // console.log('First Name: ',first_name.target.value);
    this.first_name = first_name.target.value;
  }
  second_name: string = '';
  setSecondName(second_name:any) {
    this.second_name = second_name.target.value;
  }


  
  college_name : string ='';
  setCollegeName(college_name:string){

  }

}
