import { Entity, Counter1State } from './counter1.reducer';
import { counter1Query } from './counter1.selectors';

describe('Counter1 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCounter1Id = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCounter1 = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      counter1: {
        list: [
          createCounter1('PRODUCT-AAA'),
          createCounter1('PRODUCT-BBB'),
          createCounter1('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });


});
