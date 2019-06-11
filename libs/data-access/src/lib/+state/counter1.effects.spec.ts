import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { Counter1Effects } from './counter1.effects';
import { IncrementCounter1, ClearCounter1 } from './counter1.actions';

describe('Counter1Effects', () => {
  let actions: Observable<any>;
  let effects: Counter1Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        Counter1Effects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(Counter1Effects);
  });

  describe('loadCounter1$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new IncrementCounter1() });
      expect(effects.loadCounter1$).toBeObservable(
        hot('-a-|', { a: new ClearCounter1([]) })
      );
    });
  });
});
