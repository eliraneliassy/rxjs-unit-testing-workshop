import { cold } from 'jasmine-marbles';
import { concatMap, map, mapTo, mergeMap, switchMap } from 'rxjs/operators';

describe('Marble testing operators', () => {

    xdescribe('Map', () => {
        it('should add "1" to each value emitted', () => {
            const source = cold('-a-b-c-|', { a: 1, b: 2, c: 3 });
            const expected = null; // ANSWER HERE

            const result = source.pipe(map(x => x + 1));
            expect(result).toBeObservable(expected);
        });
    });


    xdescribe('MergeMap', () => {
        it('should maps to inner observable and flattens', () => {

            const obs1 = cold('-a-------a--|', { a: 'a' });
            const obs2 = cold('-b-b-b-|', { b: 'b' });
            const expected = null; // ANSWER HERE

            const result = obs1.pipe(mergeMap(x => obs2.pipe(map(y => x + ' ' + y))));
            expect(result).toBeObservable(expected);
        });
    });

    xdescribe('SwitchMap', () => {
        it('should maps each value to inner observable and flattens', () => {
            const obs1 = cold('-a-b-|', { a: 10, b: 30 });
            const obs2 = cold('a-a-a|', { a: 10 });
            const expected = null; // ANSWER HERE

            const result = obs1.pipe(switchMap(x => obs2.pipe(map(y => x + y))));
            expect(result).toBeObservable(expected);
        });
    });

});
