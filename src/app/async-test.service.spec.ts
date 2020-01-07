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


});
