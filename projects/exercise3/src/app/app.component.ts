import { Component } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Exercise 3';
  number: any;
  prev$: any;


/**
 * The constructor function is a function that is called when a new instance of the class is created
 * @param {DataService} data - DataService - this is the service that we are injecting into the component.
 */
  constructor(data: DataService) { 
    this.number = data.getNumbers();
    this.number.subscribe((x: any) => {
      this.prev$ = x;
    })
  }
}
