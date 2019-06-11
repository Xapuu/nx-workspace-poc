import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppService {

	createdStamp = Date.now().toString().slice(9)

	constructor() {
		console.log('new appService has been created')
	}
}