"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require('@angular/router');
var app_routes_1 = require("./app.routes");
var common_1 = require("@angular/common");
var globals_1 = require("./utils/globals");
var AppComponent = (function () {
    function AppComponent(_router, _changeDetectionRef, _Location, _LocationStrategy, _app_globals) {
        this._router = _router;
        this._changeDetectionRef = _changeDetectionRef;
        this._Location = _Location;
        this._LocationStrategy = _LocationStrategy;
        this._app_globals = _app_globals;
        this.showBackButton = false;
        this.history = [];
        this._changeDetectionRef = _changeDetectionRef;
        this._LocationStrategy = _LocationStrategy;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._app_globals.navigateTo$.subscribe(function (val) {
            console.log("SUBSCRIBED NAVIATE TO:" + val);
            _this.navigateTo(val);
        });
    };
    AppComponent.prototype.toggleDrawerState = function () {
        console.log("Tap Drawer");
    };
    AppComponent.prototype.goBack = function () {
        this._LocationStrategy.back();
    };
    AppComponent.prototype.navigateTo = function (page) {
        console.log("GotoTestPage" + page);
        this._router.navigate(["testpage" + page, "PAGE" + page]).then(function () {
            alert("Route Completed but see content didn't change to PAGE" + page);
        });
    };
    AppComponent.prototype.GotoTestPage2 = function () {
        this.navigateTo("2");
    };
    AppComponent.prototype.GotoTestPage1 = function () {
        this.navigateTo("1");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_2.ROUTER_DIRECTIVES, router_1.NS_ROUTER_DIRECTIVES],
            providers: [app_routes_1.APP_ROUTER_PROVIDERS],
            templateUrl: "masterpage.html"
        }), 
        __metadata('design:paramtypes', [router_2.Router, core_1.ChangeDetectorRef, common_1.Location, common_1.LocationStrategy, globals_1.app_globals])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map