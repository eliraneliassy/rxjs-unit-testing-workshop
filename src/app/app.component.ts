import { Component } from '@angular/core';
import { of, asapScheduler, asyncScheduler, VirtualTimeScheduler, Observable, Subject, queueScheduler } from 'rxjs';
import { observeOn, delay, shareReplay, pluck, share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  }
}
