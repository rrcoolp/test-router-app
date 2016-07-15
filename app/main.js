"use strict";
var application_1 = require("nativescript-angular/application");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var globals_1 = require("./utils/globals");
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [app_component_1.AppComponent, http_1.HTTP_PROVIDERS, globals_1.app_globals]);
//# sourceMappingURL=main.js.map