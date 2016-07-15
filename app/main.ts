import {nativeScriptBootstrap} from "nativescript-angular/application";
import {HTTP_PROVIDERS} from "@angular/http";
import {AppComponent} from "./app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {app_globals} from "./utils/globals";

nativeScriptBootstrap(AppComponent, [AppComponent,HTTP_PROVIDERS,app_globals]);