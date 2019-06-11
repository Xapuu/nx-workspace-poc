import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
	Counter1State,
	counter1Query,
	fromCounter1Actions
} from '@multi-app/data-access';

import { SubMan } from '@multi-app/utils'

@Component({
	selector: 'multi-app-lazy-child',
	templateUrl: './lazy-child.component.html',
	styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent implements OnDestroy {
	subMan: SubMan = new SubMan()

	constructor(public store: Store<Counter1State>) {
		this.subMan.add(
			this.store
				.pipe(select(counter1Query.getCounter))
				.subscribe(x => {
					this.counterData.count = x.count
				})
		)
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
		this.dispatcher[action]()
	}

	ngOnDestroy(): void {
		this.subMan.clear()
	}

}
