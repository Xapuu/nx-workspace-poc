import {
	Component,
	Input,
	EventEmitter,
	Output,
	ChangeDetectionStrategy
} from '@angular/core';

import { Counter } from '@multi-app/models'

@Component({
	selector: 'multi-app-lazy-child',
	templateUrl: './lazy-child.component.html',
	styleUrls: ['./lazy-child.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyChildComponent {

	@Input() counterData: Counter;
	@Input() serviceStamp : string;
	@Output() counterAction: EventEmitter<string> = new EventEmitter();

	counterActionTrigger(action: string) {
		this.counterAction.emit(action);
	}
}
