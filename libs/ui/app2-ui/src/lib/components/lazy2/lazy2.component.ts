import {
	Component,
	Input,
	Output,
	EventEmitter
} from '@angular/core';
import { Counter } from '@multi-app/models';

@Component({
	selector: 'multi-app-lazy2',
	templateUrl: './lazy2.component.html',
	styleUrls: ['./lazy2.component.scss']
})
export class Lazy2Component {

	@Input() counterData: Counter;
	@Input() serviceStamp: string;
	@Output() counterAction: EventEmitter<string> = new EventEmitter();

	counterActionTrigger(action: string) {
		this.counterAction.emit(action);
	}

}
