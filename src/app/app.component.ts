import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  name = 'Hello World';
  
  
  first: string = 'Vaibhav';
  second: string = 'Gawad';
  college: string = 'TSEC Bandra, Mumbai';
  mobile: string = '8805078063';
  email: string = 'gawadvaibhavv@gmail.com ';
  cgpa : string = '9.0';
  isMale: boolean = true;
  github: string = 'vaibhav31s';
  data: any = {'first' : this.first, 'second': this.second, 'college':this.college, 'mobile' : this.mobile, 'email' :  this.email,'cgpa': this.cgpa, 'isMale': this.isMale, 'github': this.github};
  // data : any={};
  setData(data: any) {
    this.data = data;
    console.log("from app cmponent", this.data);
  }

}
