"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_module_1 = require("../../shared/shared.module");
var settings_routing_module_1 = require("./settings-routing.module");
var settings_container_component_1 = require("./settings/settings-container.component");
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [settings_container_component_1.SettingsContainerComponent],
            imports: [common_1.CommonModule, shared_module_1.SharedModule, settings_routing_module_1.SettingsRoutingModule]
        })
    ], SettingsModule);
    return SettingsModule;
}());
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=settings.module.js.map