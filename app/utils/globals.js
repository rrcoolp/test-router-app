"use strict";
var core_1 = require("@angular/core");
var app_globals = (function () {
    function app_globals() {
        this.navigateTo$ = new core_1.EventEmitter();
        //super();
        this.navigateTo$ = new core_1.EventEmitter();
    }
    app_globals.prototype.DespatchNavigateTo = function (value) {
        this.navigateTo$.emit(value);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], app_globals.prototype, "navigateTo$", void 0);
    app_globals = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], app_globals);
    return app_globals;
}());
exports.app_globals = app_globals;
//# sourceMappingURL=globals.js.map