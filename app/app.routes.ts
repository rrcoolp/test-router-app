import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {TestPage} from "./pages/testpage1/testpage.component";
import {TestPage2} from "./pages/testpage2/testpage.component";

export const routes: RouterConfig = [
	{ path: "testpage1/:id", component: TestPage},
	{ path: "testpage2/:id", component: TestPage2}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];
