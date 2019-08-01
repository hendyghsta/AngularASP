"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var environment_1 = require("../../environments/environment");
var browser_detect_1 = require("browser-detect");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var core_module_1 = require("../core/core.module");
var settings_actions_1 = require("../core/settings/settings.actions");
var AppComponent = /** @class */ (function () {
    function AppComponent(store, storageService) {
        this.store = store;
        this.storageService = storageService;
        this.envName = environment_1.environment.envName;
        this.version = environment_1.environment.versions;
        this.year = new Date().getFullYear();
        this.languages = ['en', 'id'];
        this.navigation = [
            { link: 'about', label: 'anms.menu.about' },
        ];
        this.navigationSideMenu = this.navigation.concat([
            { link: 'settings', label: 'anms.menu.settings' }
        ]);
    }
    AppComponent.isIEorEdgeOrSafari = function () {
        return ['ie', 'edge', 'safari'].includes(browser_detect_1.default().name);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.storageService.testLocalStorage();
        // if (AppComponent.isIEorEdgeOrSafari()) {
        //   this.store.dispatch(
        //     actionSettingsChangeAnimationsPageDisabled({
        //       pageAnimationsDisabled: true
        //     })
        //   );
        // }
        this.stickyHeader$ = this.store.pipe(store_1.select(core_module_1.selectSettingsStickyHeader));
        this.language$ = this.store.pipe(store_1.select(core_module_1.selectSettingsLanguage));
        this.theme$ = this.store.pipe(store_1.select(core_module_1.selectEffectiveTheme));
    };
    AppComponent.prototype.onLanguageSelect = function (_a) {
        var language = _a.value;
        this.store.dispatch(settings_actions_1.actionSettingsChangeLanguage({ language: language }));
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [core_module_1.routeAnimations]
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            core_module_1.LocalStorageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map