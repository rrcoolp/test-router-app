import {Injectable, Output, EventEmitter} from "@angular/core";

@Injectable()
export class app_globals {
	@Output() navigateTo$ = new EventEmitter();

	constructor() {
		//super();
		this.navigateTo$ = new EventEmitter();
	}
	DespatchNavigateTo(value) {
		this.navigateTo$.emit(value);
	}
}
