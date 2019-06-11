import { Action } from '@ngrx/store';

export enum Counter1ActionTypes {
	IncrementCounter1 = '[Counter1] Increment counter1',
	ClearCounter1 = '[Counter1] Clear counter1',
	DecrementCounter1 = '[Counter1] Decrement counter 1'
}

export class IncrementCounter1 implements Action {
	readonly type = Counter1ActionTypes.IncrementCounter1;
}

export class DecrementCounter1 implements Action {
	readonly type = Counter1ActionTypes.DecrementCounter1;
}

export class ClearCounter1 implements Action {
	readonly type = Counter1ActionTypes.ClearCounter1;
}

export type Counter1Action = IncrementCounter1 | ClearCounter1 | DecrementCounter1;

export const fromCounter1Actions = {
	IncrementCounter1: IncrementCounter1,
	ClearCounter1: ClearCounter1,
	DecrementCounter1: DecrementCounter1
};
