"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
exports.actionSettingsChangeLanguage = store_1.createAction('[Settings] Change Language', store_1.props());
exports.actionSettingsChangeTheme = store_1.createAction('[Settings] Change Theme', store_1.props());
exports.actionSettingsChangeAutoNightMode = store_1.createAction('[Settings] Change Auto Night Mode', store_1.props());
exports.actionSettingsChangeStickyHeader = store_1.createAction('[Settings] Change Sticky Header', store_1.props());
exports.actionSettingsChangeAnimationsPage = store_1.createAction('[Settings] Change Animations Page', store_1.props());
exports.actionSettingsChangeAnimationsPageDisabled = store_1.createAction('[Settings] Change Animations Page Disabled', store_1.props());
exports.actionSettingsChangeAnimationsElements = store_1.createAction('[Settings] Change Animations Elements', store_1.props());
exports.actionSettingsChangeHour = store_1.createAction('[Settings] Change Hours', store_1.props());
//# sourceMappingURL=settings.actions.js.map