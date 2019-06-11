import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'multi-app-lazy2',
	templateUrl: './lazy2.component.html',
	styleUrls: ['./lazy2.component.scss']
})
export class Lazy2Component {

	counterData = {
		count: 10,
		name: 'Counter in  app1'
	}

	counterAction(action: string) {
		console.log(action)
	}
}
