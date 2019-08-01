"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var core_state_1 = require("../core.state");
exports.selectSettings = store_1.createSelector(core_state_1.selectSettingsState, function (state) { return state; });
exports.selectSettingsStickyHeader = store_1.createSelector(exports.selectSettings, function (state) { return state.stickyHeader; });
exports.selectSettingsLanguage = store_1.createSelector(exports.selectSettings, function (state) { return state.language; });
exports.selectTheme = store_1.createSelector(exports.selectSettings, function (settings) { return settings.theme; });
exports.selectPageAnimations = store_1.createSelector(exports.selectSettings, function (settings) { return settings.pageAnimations; });
exports.selectElementsAnimations = store_1.createSelector(exports.selectSettings, function (settings) { return settings.elementsAnimations; });
exports.selectAutoNightMode = store_1.createSelector(exports.selectSettings, function (settings) { return settings.autoNightMode; });
exports.selectNightTheme = store_1.createSelector(exports.selectSettings, function (settings) { return settings.nightTheme; });
exports.selectHour = store_1.createSelector(exports.selectSettings, function (settings) { return settings.hour; });
exports.selectIsNightHour = store_1.createSelector(exports.selectAutoNightMode, exports.selectHour, function (autoNightMode, hour) { return autoNightMode && (hour >= 21 || hour <= 7); });
exports.selectEffectiveTheme = store_1.createSelector(exports.selectTheme, exports.selectNightTheme, exports.selectIsNightHour, function (theme, nightTheme, isNightHour) {
    return (isNightHour ? nightTheme : theme).toLowerCase();
});
//# sourceMappingURL=settings.selectors.js.map