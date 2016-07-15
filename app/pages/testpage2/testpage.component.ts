import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {app_globals} from "../../utils/globals";

@Component({
	selector: "testpage2",
	templateUrl: "pages/testpage2/testpage.html"
})


export class TestPage2 implements OnInit {
	sub;
	param:string;
    constructor(private route: ActivatedRoute, private _app_globals: app_globals) {
    }
	ngOnInit() {
		console.log("INIT PAGE 2");
		this.sub = this.route.params.subscribe(params => {
			this.param = params["id"];
			console.log(this.param);			
		});
	}
	gotoPage1() {
		console.log(this.param);
		console.log("TAP: gotoPage1");
		this._app_globals.DespatchNavigateTo("1");
	}


}