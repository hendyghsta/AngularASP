"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var auth_selectors_1 = require("./auth.selectors");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(store) {
        this.store = store;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.store.pipe(store_1.select(auth_selectors_1.selectIsAuthenticated));
    };
    AuthGuardService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth-guard.service.js.map