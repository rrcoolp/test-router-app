"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var TestPage = (function () {
    function TestPage(route) {
        this.route = route;
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
    };
    TestPage = __decorate([
        core_1.Component({
            selector: "testpage",
            templateUrl: "pages/testpage/testpage.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], TestPage);
    return TestPage;
}());
exports.TestPage = TestPage;
//# sourceMappingURL=testpage.component.js.map