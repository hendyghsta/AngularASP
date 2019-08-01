"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var local_storage_service_1 = require("../local-storage/local-storage.service");
var auth_actions_1 = require("./auth.actions");
exports.AUTH_KEY = 'AUTH';
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, localStorageService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.router = router;
        this.login = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(auth_actions_1.authLogin), operators_1.tap(function () {
                return _this.localStorageService.setItem(exports.AUTH_KEY, { isAuthenticated: true });
            }));
        }, { dispatch: false });
        this.logout = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(auth_actions_1.authLogout), operators_1.tap(function () {
                _this.router.navigate(['']);
                _this.localStorageService.setItem(exports.AUTH_KEY, {
                    isAuthenticated: false
                });
            }));
        }, { dispatch: false });
    }
    AuthEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [effects_1.Actions,
            local_storage_service_1.LocalStorageService,
            router_1.Router])
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
//# sourceMappingURL=auth.effects.js.map