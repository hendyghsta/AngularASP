"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BigInputComponent = /** @class */ (function () {
    function BigInputComponent() {
        this.value = '';
        this.disabled = false;
        this.hasFocus = false;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], BigInputComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BigInputComponent.prototype, "disabled", void 0);
    BigInputComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'anms-big-input',
            templateUrl: './big-input.component.html',
            styleUrls: ['./big-input.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], BigInputComponent);
    return BigInputComponent;
}());
exports.BigInputComponent = BigInputComponent;
//# sourceMappingURL=big-input.component.js.map