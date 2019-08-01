"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core/core.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app/app.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                // angular
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                // shared & core
                shared_module_1.SharedModule,
                core_module_1.CoreModule,
                // app
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map