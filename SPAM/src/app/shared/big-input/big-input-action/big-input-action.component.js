"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BigInputActionComponent = /** @class */ (function () {
    function BigInputActionComponent() {
        this.disabled = false;
        this.fontSet = '';
        this.fontIcon = '';
        this.faIcon = '';
        this.label = '';
        this.color = '';
        this.action = new core_1.EventEmitter();
        this.hasFocus = false;
    }
    BigInputActionComponent.prototype.onClick = function () {
        this.action.emit();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "fontSet", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "fontIcon", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "faIcon", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "label", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "action", void 0);
    BigInputActionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'anms-big-input-action',
            templateUrl: './big-input-action.component.html',
            styleUrls: ['./big-input-action.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], BigInputActionComponent);
    return BigInputActionComponent;
}());
exports.BigInputActionComponent = BigInputActionComponent;
//# sourceMappingURL=big-input-action.component.js.map