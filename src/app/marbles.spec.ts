import { cold } from 'jasmine-marbles';
import { concatMap, map, mapTo, mergeMap, switchMap } from 'rxjs/operators';

describe('Marble testing operators', () => {

    describe('Map', () => {
        it('should add "1" to each value emitted', () => {
            const source = cold('-a-b-c-|', { a: 1, b: 2, c: 3 });
            const expected = cold('-x-y-z-|', { x: 2, y: 3, z: 4 });

            const result = source.pipe(map(x => x + 1));
            expect(result).toBeObservable(expected);
        });
    });

    describe('MapTo', () => {
        it('should map every value emitted to "surprise!"', () => {
            const values = { a: 1, b: 2, c: 3, x: 'surprise!' };
            const source = cold('-a-b-c-|', values);
            const expected = cold('-x-x-x-|', values);

            const result = source.pipe(mapTo('surprise!'));
            expect(result).toBeObservable(expected);
        });
    });

    describe('MergeMap', () => {
        it('should maps to inner observable and flattens', () => {
            const values = { a: 'hello', b: 'world', x: 'hello world' };
            const obs1 = cold('-a-------a--|', values);
            const obs2 = cold('-b-b-b-|', values);
            const expected = cold('--x-x-x---x-x-x-|', values);

            const result = obs1.pipe(mergeMap(x => obs2.pipe(map(y => x + ' ' + y))));
            expect(result).toBeObservable(expected);
        });
    });

    describe('SwitchMap', () => {
        it('should maps each value to inner observable and flattens', () => {
            const values = { a: 10, b: 30, x: 20, y: 40 };
            const obs1 = cold('-a-----a--b-|', values);
            const obs2 = cold('a-a-a|', values);
            const expected = cold('-x-x-x-x-xy-y-y|', values);

            const result = obs1.pipe(switchMap(x => obs2.pipe(map(y => x + y))));
            expect(result).toBeObservable(expected);
        });
    });

    describe('ConcatMap', () => {
        it('should maps values to inner observable and emits in order', () => {
            const values = { a: 10, b: 30, x: 20, y: 40 };
            const obs1 = cold('-a--------b------ab|', values);
            const obs2 = cold('a-a-a|', values);
            const expected = cold('-x-x-x----y-y-y--x-x-xy-y-y|', values);

            const result = obs1.pipe(concatMap(x => obs2.pipe(map(y => x + y))));
            expect(result).toBeObservable(expected);
        });
    });
});
