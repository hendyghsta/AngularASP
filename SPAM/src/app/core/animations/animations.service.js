"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AnimationsService = /** @class */ (function () {
    function AnimationsService() {
        AnimationsService_1.routeAnimationType = 'NONE';
    }
    AnimationsService_1 = AnimationsService;
    AnimationsService.isRouteAnimationsType = function (type) {
        return AnimationsService_1.routeAnimationType === type;
    };
    AnimationsService.prototype.updateRouteAnimationType = function (pageAnimations, elementsAnimations) {
        AnimationsService_1.routeAnimationType =
            pageAnimations && elementsAnimations
                ? 'ALL'
                : pageAnimations
                    ? 'PAGE'
                    : elementsAnimations
                        ? 'ELEMENTS'
                        : 'NONE';
    };
    var AnimationsService_1;
    AnimationsService.routeAnimationType = 'NONE';
    AnimationsService = AnimationsService_1 = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnimationsService);
    return AnimationsService;
}());
exports.AnimationsService = AnimationsService;
//# sourceMappingURL=animations.service.js.map