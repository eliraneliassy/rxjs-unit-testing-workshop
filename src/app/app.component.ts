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
    console.log(1);
    of(3, queueScheduler).subscribe(console.log);
    setTimeout(() => console.log(2), 0);
    Promise.resolve(4).then(console.log);
    console.log(5);

    // const x = of(6);
    // x.pipe(observeOn(asapScheduler)).subscribe(console.log);

    // cold
    // const obs$ = new Observable((observer) => {
    //   observer.next(Math.random());
    // }).pipe(
    //   shareReplay(1)
    // );

    // obs$.subscribe(console.log);
    // obs$.subscribe(console.log);
    // obs$.subscribe(console.log);
    // obs$.subscribe(console.log);

    // // hot
    // const num = Math.random();
    // const obs2$ = new Observable((observer) => {
    //   observer.next(num);
    // });

    // obs2$.subscribe(console.log);
    // obs2$.subscribe(console.log);


  }
}
