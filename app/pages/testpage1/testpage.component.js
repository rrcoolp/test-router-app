"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var globals_1 = require("../../utils/globals");
var TestPage = (function () {
    function TestPage(route, _app_globals) {
        this.route = route;
        this._app_globals = _app_globals;
    }
    TestPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.param = params["id"]; // (+) converts string 'id' to a number
            console.log(_this.param);
        });
    };
    TestPage.prototype.gotoPage2 = function () {
        console.log(this.param);
        console.log("TAP: gotoPage2");
        this._app_globals.DespatchNavigateTo("2");
    };
    TestPage = __decorate([
        core_1.Component({
            selector: "testpage",
            templateUrl: "pages/testpage1/testpage.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, globals_1.app_globals])
    ], TestPage);
    return TestPage;
}());
exports.TestPage = TestPage;
//# sourceMappingURL=testpage.component.js.map