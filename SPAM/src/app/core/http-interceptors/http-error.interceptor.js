"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
/** Passes HttpErrorResponse to application-wide error handler */
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(injector) {
        this.injector = injector;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.tap({
            error: function (err) {
                if (err instanceof http_1.HttpErrorResponse) {
                    var appErrorHandler = _this.injector.get(core_1.ErrorHandler);
                    appErrorHandler.handleError(err);
                }
            }
        }));
    };
    HttpErrorInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_1.Injector])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());
exports.HttpErrorInterceptor = HttpErrorInterceptor;
//# sourceMappingURL=http-error.interceptor.js.map