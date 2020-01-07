import { Injectable } from '@angular/core';
import { of, asapScheduler, asyncScheduler, from, range } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsyncTestService {

  constructor() {
  }

}
