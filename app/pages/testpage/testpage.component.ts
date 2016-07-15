import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: "testpage",
	templateUrl: "pages/testpage/testpage.html"
})


export class TestPage implements OnInit {
    sub;
	param:string;
    constructor(private route: ActivatedRoute) {

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
	}


}