import { Injectable, OnInit } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { Counter1PartialState } from './counter1.reducer';
import {
	IncrementCounter1,
	ClearCounter1,
	DecrementCounter1,
	Counter1ActionTypes
} from './counter1.actions';
import { of } from 'rxjs';
import { createAction } from '@ngrx/store';

@Injectable()
export class Counter1Effects {

	temp = Date.now()

	@Effect() loadCounter1$ = this.dataPersistence.fetch(
		Counter1ActionTypes.IncrementCounter1,
		{
			run: (action: IncrementCounter1, state: Counter1PartialState) => {
				// Check if the effects are single instance and called only once
				console.log('same instance increment effect called', this.temp)
				return createAction('test effect', (state) => state);
			},

			onError: (action: IncrementCounter1, error) => {
				return new DecrementCounter1();
			}
		}
	);

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<Counter1PartialState>
	) {

		console.log('initialize effect')
	}
}
