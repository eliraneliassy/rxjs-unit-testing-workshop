import { TestBed, fakeAsync, tick, flushMicrotasks, flush } from '@angular/core/testing';

import { AsyncTestService } from './async-test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { VirtualTimeScheduler, asyncScheduler } from 'rxjs';

describe('AsyncTestService', () => {

  let service: AsyncTestService;
  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.get(AsyncTestService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should emit 4 speific values - done', () => {
    const result = [];
    service.getRange().subscribe(
      (num) => result.push(num),
      () => { },
      () => {
        expect(result).toEqual([0, 1, 2, 3]);
      }
    );
  });

  it('should emit 4 speific values with marbles', () => {
    const obs$ = cold('--x|', { x: [0, 1, 2, 3] });
    spyOn(service, 'getRange').and.returnValue(obs$);

    let range = [];
    service.getRange().subscribe(
      (num: any) => range = num,
    );

    getTestScheduler().flush();

    expect(range).toEqual([0, 1, 2, 3]);

  });

  it('should emit 4 specific values, get range 2', () => {
    const scheduler = new VirtualTimeScheduler();

    const range$ = service.getRange2(scheduler);
    const result = [];
    range$.subscribe({
      next: (value) => {
        result.push(value);
      }
    });

    scheduler.flush();
    expect(result).toEqual([0, 1, 2, 3]);
  });

  it('should emit 4 specific values - virtual schdulers with no arguments', () => {
    const virtScheduler = new VirtualTimeScheduler();
    (asyncScheduler.constructor as any).delegate = virtScheduler;

    const range$ = service.getRange();
    const result = [];

    range$.subscribe({
      next: (value) => {
        result.push(value);
      }
    });

    virtScheduler.flush();
    expect(result).toEqual([0, 1, 2, 3]);

    (asyncScheduler.constructor as any).delegate = undefined;
  });


  it('should emit 4 specific values - fake async', fakeAsync(() => {
    const range$ = service.getRange();
    const result = [];

    range$.subscribe(
      (value) => {
        result.push(value);
      }
    );

    tick(6000);

    expect(result).toEqual([0, 1, 2, 3]);
  }));
});
