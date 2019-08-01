"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var NotificationService = /** @class */ (function () {
    function NotificationService(snackBar, zone) {
        this.snackBar = snackBar;
        this.zone = zone;
    }
    NotificationService.prototype.default = function (message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'default-notification-overlay'
        });
    };
    NotificationService.prototype.info = function (message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'info-notification-overlay'
        });
    };
    NotificationService.prototype.success = function (message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'success-notification-overlay'
        });
    };
    NotificationService.prototype.warn = function (message) {
        this.show(message, {
            duration: 2500,
            panelClass: 'warning-notification-overlay'
        });
    };
    NotificationService.prototype.error = function (message) {
        this.show(message, {
            duration: 3000,
            panelClass: 'error-notification-overlay'
        });
    };
    NotificationService.prototype.show = function (message, configuration) {
        var _this = this;
        // Need to open snackBar from Angular zone to prevent issues with its position per
        // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
        this.zone.run(function () { return _this.snackBar.open(message, null, configuration); });
    };
    NotificationService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [material_1.MatSnackBar,
            core_1.NgZone])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map