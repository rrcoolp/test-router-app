"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var TestPage2 = (function () {
    function TestPage2(route) {
        this.route = route;
    }
    TestPage2.prototype.ngOnInit = function () {
        var _this = this;
        console.log("INIT PAGE 2");
        this.sub = this.route.params.subscribe(function (params) {
            _this.param = params["id"];
            console.log(_this.param);
        });
    };
    TestPage2.prototype.gotoPage1 = function () {
        console.log(this.param);
        console.log("TAP: gotoPage1");
    };
    TestPage2 = __decorate([
        core_1.Component({
            selector: "testpage2",
            templateUrl: "pages/testpage2/testpage.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], TestPage2);
    return TestPage2;
}());
exports.TestPage2 = TestPage2;
//# sourceMappingURL=testpage.component.js.map