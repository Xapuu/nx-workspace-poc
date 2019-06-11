import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { Counter1PartialState } from './counter1.reducer';
import {
  IncrementCounter1,
  ClearCounter1,
  DecrementCounter1,
  Counter1ActionTypes
} from './counter1.actions';

@Injectable()
export class Counter1Effects {
  @Effect() loadCounter1$ = this.dataPersistence.fetch(
    Counter1ActionTypes.IncrementCounter1,
    {
      run: (action: IncrementCounter1, state: Counter1PartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ClearCounter1([]);
      },

      onError: (action: IncrementCounter1, error) => {
        console.error('Error', error);
        return new DecrementCounter1(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<Counter1PartialState>
  ) {}
}
