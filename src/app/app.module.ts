import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OutputFormComponent } from './output-form/output-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    NavbarComponent,
    OutputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
