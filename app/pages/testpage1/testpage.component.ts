import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {app_globals} from "../../utils/globals";

@Component({
	selector: "testpage",
	templateUrl: "pages/testpage1/testpage.html"
})


export class TestPage implements OnInit {
    sub;
	param:string;
    constructor(private route: ActivatedRoute, private _app_globals: app_globals) {
    }
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.param = params["id"]; // (+) converts string 'id' to a number
			console.log(this.param);			
		});
	}
	gotoPage2() {
		console.log(this.param);			
		console.log("TAP: gotoPage2");
		this._app_globals.DespatchNavigateTo("2");
	}


}