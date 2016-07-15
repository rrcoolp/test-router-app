"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require('@angular/router');
var app_routes_1 = require("./app.routes");
var common_1 = require("@angular/common");
var AppComponent = (function () {
    function AppComponent(_router, _changeDetectionRef, _Location, _LocationStrategy) {
        this._router = _router;
        this._changeDetectionRef = _changeDetectionRef;
        this._Location = _Location;
        this._LocationStrategy = _LocationStrategy;
        this.showBackButton = false;
        this.history = [];
        this._changeDetectionRef = _changeDetectionRef;
        this._LocationStrategy = _LocationStrategy;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.toggleDrawerState = function () {
        console.log("Tap Drawer");
    };
    AppComponent.prototype.goBack = function () {
        this._LocationStrategy.back();
    };
    AppComponent.prototype.GotoTestPage2 = function () {
        console.log("GotoTestPage2");
        this._router.navigate(["testpage2", "PAGE_2"]).then(function () {
            alert("Route Completed to PAGE 2");
        });
    };
    AppComponent.prototype.GotoTestPage1 = function () {
        console.log("GotoTestPage1");
        this._router.navigate(["testpage", "PAGE_1"]).then(function () {
            alert("Route Completed to PAGE 1");
        });
    };
    AppComponent.prototype.navigateBasket = function () {
        console.log("Tap Basket");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_2.ROUTER_DIRECTIVES, router_1.NS_ROUTER_DIRECTIVES],
            providers: [app_routes_1.APP_ROUTER_PROVIDERS],
            templateUrl: "masterpage.html"
        }), 
        __metadata('design:paramtypes', [router_2.Router, core_1.ChangeDetectorRef, common_1.Location, common_1.LocationStrategy])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map