"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var environment_1 = require("../../../environments/environment");
var notification_service_1 = require("../notifications/notification.service");
/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
var AppErrorHandler = /** @class */ (function (_super) {
    tslib_1.__extends(AppErrorHandler, _super);
    function AppErrorHandler(notificationsService) {
        var _this = _super.call(this) || this;
        _this.notificationsService = notificationsService;
        return _this;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        var displayMessage = 'An error occurred.';
        if (!environment_1.environment.production) {
            displayMessage += ' See console for details.';
        }
        this.notificationsService.error(displayMessage);
        _super.prototype.handleError.call(this, error);
    };
    AppErrorHandler = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [notification_service_1.NotificationService])
    ], AppErrorHandler);
    return AppErrorHandler;
}(core_1.ErrorHandler));
exports.AppErrorHandler = AppErrorHandler;
//# sourceMappingURL=app-error-handler.service.js.map