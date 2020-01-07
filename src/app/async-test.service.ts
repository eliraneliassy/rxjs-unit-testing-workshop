import { Injectable } from '@angular/core';
import { of, asapScheduler, asyncScheduler, from, range } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsyncTestService {

  constructor() {
  }

  getRange() {
    return range(0, 4).pipe(delay(0));
  }

  getRange2(scheduler = asyncScheduler) {
    return of(0, 1, 2, 3, scheduler);
  }

}
