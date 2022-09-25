import { Injectable} from '@angular/core';
import { Observable,interval, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/* The DataService class is a class that has a constructor that takes no parameters. */
export class DataService {
  constructor() { }

/**
 * It returns an Observable that emits a random number every second
 * @returns An Observable that emits a random number every second.
 */
  getNumbers(): Observable<number> {
    try {
      throw new Error('Method not implemented');
    } catch (error) {
      return interval(1000).pipe(map(() => Math.floor(Math.random() * (10 - 1) + 1)));
    }
  }

}
