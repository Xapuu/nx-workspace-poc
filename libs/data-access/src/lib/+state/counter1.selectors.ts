import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER1_FEATURE_KEY, Counter1State } from './counter1.reducer';

// Lookup the 'Counter1' feature state managed by NgRx
const getCounter1State = createFeatureSelector<Counter1State>(
	COUNTER1_FEATURE_KEY
);

const getCounter = createSelector(
	getCounter1State,
	(state: Counter1State) => state
);

export const counter1Query = {
	getCounter
};
