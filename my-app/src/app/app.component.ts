import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';
  myOwnText="As part of the initial app, the CLI created the first Angular component for you. It is the root component, and it is named app-root.";
}
