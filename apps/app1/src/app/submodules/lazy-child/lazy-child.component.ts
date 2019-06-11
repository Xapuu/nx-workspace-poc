import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
	Counter1State,
	counter1Query,
	fromCounter1Actions
} from '@multi-app/data-access';

@Component({
	selector: 'multi-app-lazy-child',
	templateUrl: './lazy-child.component.html',
	styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent {

	constructor(public store: Store<Counter1State>) {
		this.store
			.pipe(select(counter1Query.getCounter))
			.subscribe(x => {
				console.log(x)

				this.counterData.count = x.count
			})
	}
	
	counterData = {
		count: 10,
		name: 'Counter in  app1'
	}

	dispatcher = {
		increment: () => this.store.dispatch(new fromCounter1Actions.IncrementCounter1()),
		decrement: () => this.store.dispatch(new fromCounter1Actions.DecrementCounter1()),
		clear: () => this.store.dispatch(new fromCounter1Actions.ClearCounter1())
	}


	counterAction(action: string) {
		console.log('dispatching')
		this.dispatcher[action]()
	}
}
