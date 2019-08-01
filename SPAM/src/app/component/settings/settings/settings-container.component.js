"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var core_module_1 = require("../../../core/core.module");
var settings_actions_1 = require("../../../core/settings/settings.actions");
var settings_selectors_1 = require("../../../core/settings/settings.selectors");
var SettingsContainerComponent = /** @class */ (function () {
    function SettingsContainerComponent(store) {
        this.store = store;
        this.routeAnimationsElements = core_module_1.ROUTE_ANIMATIONS_ELEMENTS;
        this.themes = [
            { value: 'DEFAULT-THEME', label: 'blue' },
            { value: 'LIGHT-THEME', label: 'light' },
            { value: 'NATURE-THEME', label: 'nature' },
            { value: 'BLACK-THEME', label: 'dark' }
        ];
        this.languages = [
            { value: 'en', label: 'en' },
            { value: 'id', label: 'id' },
        ];
    }
    SettingsContainerComponent.prototype.ngOnInit = function () {
        this.settings$ = this.store.pipe(store_1.select(settings_selectors_1.selectSettings));
    };
    SettingsContainerComponent.prototype.onLanguageSelect = function (_a) {
        var language = _a.value;
        this.store.dispatch(settings_actions_1.actionSettingsChangeLanguage({ language: language }));
    };
    SettingsContainerComponent.prototype.onThemeSelect = function (_a) {
        var theme = _a.value;
        this.store.dispatch(settings_actions_1.actionSettingsChangeTheme({ theme: theme }));
    };
    SettingsContainerComponent.prototype.onAutoNightModeToggle = function (_a) {
        var autoNightMode = _a.checked;
        this.store.dispatch(settings_actions_1.actionSettingsChangeAutoNightMode({ autoNightMode: autoNightMode }));
    };
    SettingsContainerComponent.prototype.onStickyHeaderToggle = function (_a) {
        var stickyHeader = _a.checked;
        this.store.dispatch(settings_actions_1.actionSettingsChangeStickyHeader({ stickyHeader: stickyHeader }));
    };
    SettingsContainerComponent.prototype.onPageAnimationsToggle = function (_a) {
        var pageAnimations = _a.checked;
        this.store.dispatch(settings_actions_1.actionSettingsChangeAnimationsPage({ pageAnimations: pageAnimations }));
    };
    SettingsContainerComponent.prototype.onElementsAnimationsToggle = function (_a) {
        var elementsAnimations = _a.checked;
        this.store.dispatch(settings_actions_1.actionSettingsChangeAnimationsElements({ elementsAnimations: elementsAnimations }));
    };
    SettingsContainerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-settings',
            templateUrl: './settings-container.component.html',
            styleUrls: ['./settings-container.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store])
    ], SettingsContainerComponent);
    return SettingsContainerComponent;
}());
exports.SettingsContainerComponent = SettingsContainerComponent;
//# sourceMappingURL=settings-container.component.js.map