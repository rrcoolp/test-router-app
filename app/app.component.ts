import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {Location, LocationStrategy} from "@angular/common";
import {app_globals} from "./utils/globals";

@Component({
	selector: "main",
	directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
	providers: [APP_ROUTER_PROVIDERS],
	templateUrl: "masterpage.html"
})
export class AppComponent implements OnInit {
	showBackButton: boolean = false;
	history: any = [];
	pushState: any;

	constructor(public _router: Router, private _changeDetectionRef: ChangeDetectorRef, private _Location: Location, private _LocationStrategy: LocationStrategy, private _app_globals: app_globals) {
		this._changeDetectionRef = _changeDetectionRef;
		this._LocationStrategy = _LocationStrategy;
	}
	ngOnInit() {
		this._app_globals.navigateTo$.subscribe(val => {
			console.log("SUBSCRIBED NAVIATE TO:" + val);
			this.navigateTo(val);
		});
	}

	toggleDrawerState() {
		console.log("Tap Drawer");
	}


	goBack() {
		this._LocationStrategy.back();
	}
	navigateTo(page) {
		console.log("GotoTestPage"+page);
		this._router.navigate(["testpage"+page, "PAGE"+page]).then(() => {
			alert("Route Completed but see content didn't change to PAGE"+page);
			
		});
	}

	GotoTestPage2() {
		this.navigateTo("2");
	}

	GotoTestPage1() {
		this.navigateTo("1");
	}
}