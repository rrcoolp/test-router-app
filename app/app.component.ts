import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {Location, LocationStrategy} from "@angular/common";

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

	constructor(public _router: Router, private _changeDetectionRef: ChangeDetectorRef,private _Location: Location, private _LocationStrategy: LocationStrategy) {
		this._changeDetectionRef = _changeDetectionRef;
		this._LocationStrategy = _LocationStrategy;
	}
	ngOnInit() {
	}

	toggleDrawerState() { 
		console.log("Tap Drawer");		
	}


	goBack() {
		this._LocationStrategy.back();
	}

	GotoTestPage2() { 
		console.log("GotoTestPage2");				
		this._router.navigate(["testpage2", "PAGE_2"]).then(() => { 
			alert("Route Completed to PAGE 2");
		});
	}

	GotoTestPage1() { 
		console.log("GotoTestPage1");				
		this._router.navigate(["testpage", "PAGE_1"]).then(() => { 
			alert("Route Completed to PAGE 1");
		});
	}	
	
	navigateBasket() {
		console.log("Tap Basket");
	}
}