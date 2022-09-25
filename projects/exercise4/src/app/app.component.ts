import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
/* The AppComponent class is a TypeScript class that has a title property that is a string and is set to "Exercise 4" */
export class AppComponent {

  title: string = 'Exercise 4';
  header$: string = "Header";
  sidebar$: string = "Sidebar";
  feature$: string = "Feature";
  a$: string = "A";
  b$: string = "B";

}
