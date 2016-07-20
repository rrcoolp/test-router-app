"use strict";
var router_1 = require("nativescript-angular/router");
var testpage_component_1 = require("./pages/testpage1/testpage.component");
var testpage_component_2 = require("./pages/testpage2/testpage.component");
exports.routes = [
    { path: "testpage1/:id", component: testpage_component_1.TestPage },
    { path: "testpage2/:id", component: testpage_component_2.TestPage2 }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map