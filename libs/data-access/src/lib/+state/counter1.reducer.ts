import { Counter1Action, Counter1ActionTypes } from './counter1.actions';
import { createReducer } from '@ngrx/store';

export const COUNTER1_FEATURE_KEY = 'counter1';

/**
 * Interface for the 'Counter1' data used in
 *  - Counter1State, and
 *  - counter1Reducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity { }

export interface Counter1State {
	count: number
}

export interface Counter1PartialState {
	readonly [COUNTER1_FEATURE_KEY]: Counter1State;
}

export const initialState: Counter1State = {
	count: 0
};

// Try with createReducerFunction
// export const counterReducer = createReducer()

export function counter1Reducer(
	state: Counter1State = initialState,
	action: Counter1Action
): Counter1State {
	switch (action.type) {

		case Counter1ActionTypes.ClearCounter1: {
			state = { ...state, count: 0 }
			console.log('clear')
		
			break;
		}


		case Counter1ActionTypes.IncrementCounter1: {
			state = { ...state, count: state.count + 1 }
			
		console.log('++')
			
			break;
		}

		case Counter1ActionTypes.DecrementCounter1: {
			state = { ...state, count: state.count - 1 }
		console.log('--')
			
			break
		}
	}
	return state;
}
