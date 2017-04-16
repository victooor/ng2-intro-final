import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><colleagues></colleagues>'
})
export class AppComponent {
  title: string = "Collateral dream team";
}
