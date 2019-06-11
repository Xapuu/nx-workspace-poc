import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Counter } from '@multi-app/models'
@Component({
	selector: 'multi-app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

	@Input() counterData: Counter
	@Output() counterAction: EventEmitter<string> = new EventEmitter()

	color: any;

	doAction(action: string) {
		this.counterAction.emit(action)
	}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.color = '#' + (function co(lor) {
			return (lor +=
				[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)])
				&& (lor.length === 6) ? lor : co(lor);
		})('');
	}

}
