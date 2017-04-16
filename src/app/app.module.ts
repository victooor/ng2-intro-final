import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here;
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { ColleagueComponent } from './colleagues/colleague.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent, 
    ColleaguesComponent,
    ColleagueComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
