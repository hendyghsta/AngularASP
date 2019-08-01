"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var settings_model_1 = require("./settings.model");
var settings_actions_1 = require("./settings.actions");
var store_1 = require("@ngrx/store");
exports.initialState = {
    language: 'en',
    theme: 'DEFAULT-THEME',
    autoNightMode: false,
    nightTheme: settings_model_1.NIGHT_MODE_THEME,
    stickyHeader: true,
    pageAnimations: true,
    pageAnimationsDisabled: false,
    elementsAnimations: true,
    hour: 0
};
var reducer = store_1.createReducer(exports.initialState, store_1.on(settings_actions_1.actionSettingsChangeLanguage, settings_actions_1.actionSettingsChangeTheme, settings_actions_1.actionSettingsChangeAutoNightMode, settings_actions_1.actionSettingsChangeStickyHeader, settings_actions_1.actionSettingsChangeAnimationsPage, settings_actions_1.actionSettingsChangeAnimationsElements, settings_actions_1.actionSettingsChangeHour, function (state, action) { return (tslib_1.__assign({}, state, action)); }), store_1.on(settings_actions_1.actionSettingsChangeAnimationsPageDisabled, function (state, _a) {
    var pageAnimationsDisabled = _a.pageAnimationsDisabled;
    return (tslib_1.__assign({}, state, { pageAnimationsDisabled: pageAnimationsDisabled, pageAnimations: false }));
}));
function settingsReducer(state, action) {
    return reducer(state, action);
}
exports.settingsReducer = settingsReducer;
//# sourceMappingURL=settings.reducer.js.map