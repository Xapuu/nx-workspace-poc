import { Subscription } from 'rxjs';


export class SubMan {

	private subs: Subscription[] = []

	add(...subscriptions) {
		subscriptions.forEach(sub => this.subs.push(sub));
	}

	clear() {
		this.subs.forEach(sub => sub.unsubscribe());
	}
}