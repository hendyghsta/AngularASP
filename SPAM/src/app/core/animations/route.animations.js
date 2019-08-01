"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var animations_service_1 = require("./animations.service");
exports.ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';
var STEPS_ALL = [
    animations_1.query(':enter > *', animations_1.style({ opacity: 0, position: 'fixed' }), {
        optional: true
    }),
    animations_1.query(':enter .' + exports.ROUTE_ANIMATIONS_ELEMENTS, animations_1.style({ opacity: 0 }), {
        optional: true
    }),
    animations_1.sequence([
        animations_1.query(':leave > *', [
            animations_1.style({ transform: 'translateY(0%)', opacity: 1 }),
            animations_1.animate('0.2s ease-in-out', animations_1.style({ transform: 'translateY(-3%)', opacity: 0 })),
            animations_1.style({ position: 'fixed' })
        ], { optional: true }),
        animations_1.query(':enter > *', [
            animations_1.style({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(0%)', opacity: 1 }))
        ], { optional: true })
    ]),
    animations_1.query(':enter .' + exports.ROUTE_ANIMATIONS_ELEMENTS, animations_1.stagger(75, [
        animations_1.style({ transform: 'translateY(10%)', opacity: 0 }),
        animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(0%)', opacity: 1 }))
    ]), { optional: true })
];
var STEPS_NONE = [];
var STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
var STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
exports.routeAnimations = animations_1.trigger('routeAnimations', [
    animations_1.transition(isRouteAnimationsAll, STEPS_ALL),
    animations_1.transition(isRouteAnimationsNone, STEPS_NONE),
    animations_1.transition(isRouteAnimationsPage, STEPS_PAGE),
    animations_1.transition(isRouteAnimationsElements, STEPS_ELEMENTS)
]);
function isRouteAnimationsAll() {
    return animations_service_1.AnimationsService.isRouteAnimationsType('ALL');
}
exports.isRouteAnimationsAll = isRouteAnimationsAll;
function isRouteAnimationsNone() {
    return animations_service_1.AnimationsService.isRouteAnimationsType('NONE');
}
exports.isRouteAnimationsNone = isRouteAnimationsNone;
function isRouteAnimationsPage() {
    return animations_service_1.AnimationsService.isRouteAnimationsType('PAGE');
}
exports.isRouteAnimationsPage = isRouteAnimationsPage;
function isRouteAnimationsElements() {
    return animations_service_1.AnimationsService.isRouteAnimationsType('ELEMENTS');
}
exports.isRouteAnimationsElements = isRouteAnimationsElements;
//# sourceMappingURL=route.animations.js.map