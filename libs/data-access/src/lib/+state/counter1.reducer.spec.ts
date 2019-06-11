import { ClearCounter1 } from './counter1.actions';
import {
  Counter1State,
  Entity,
  initialState,
  counter1Reducer
} from './counter1.reducer';

describe('Counter1 Reducer', () => {
  const getCounter1Id = it => it['id'];
  let createCounter1;

  beforeEach(() => {
    createCounter1 = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Counter1 actions ', () => {
    it('should return set the list of known Counter1', () => {
      const counter1s = [
        createCounter1('PRODUCT-AAA'),
        createCounter1('PRODUCT-zzz')
      ];
      const action = new ClearCounter1(counter1s);
      const result: Counter1State = counter1Reducer(initialState, action);
      const selId: string = getCounter1Id(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = counter1Reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
