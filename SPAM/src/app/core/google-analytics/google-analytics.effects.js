"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var GoogleAnalyticsEffects = /** @class */ (function () {
    function GoogleAnalyticsEffects(router) {
        var _this = this;
        this.router = router;
        this.pageView = effects_1.createEffect(function () { return function () {
            return _this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.tap(function (event) {
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
            }));
        }; }, { dispatch: false });
    }
    GoogleAnalyticsEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], GoogleAnalyticsEffects);
    return GoogleAnalyticsEffects;
}());
exports.GoogleAnalyticsEffects = GoogleAnalyticsEffects;
//# sourceMappingURL=google-analytics.effects.js.map