import {nativeScriptBootstrap} from "nativescript-angular/application";
import {HTTP_PROVIDERS} from "@angular/http";
import {AppComponent} from "./app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

nativeScriptBootstrap(AppComponent, [AppComponent,HTTP_PROVIDERS]);