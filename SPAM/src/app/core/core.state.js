"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var router_store_1 = require("@ngrx/router-store");
var environment_1 = require("../../environments/environment");
var init_state_from_local_storage_reducer_1 = require("./meta-reducers/init-state-from-local-storage.reducer");
var debug_reducer_1 = require("./meta-reducers/debug.reducer");
var auth_reducer_1 = require("./auth/auth.reducer");
var settings_reducer_1 = require("./settings/settings.reducer");
exports.reducers = {
    auth: auth_reducer_1.authReducer,
    settings: settings_reducer_1.settingsReducer,
    router: router_store_1.routerReducer
};
exports.metaReducers = [
    init_state_from_local_storage_reducer_1.initStateFromLocalStorage
];
if (!environment_1.environment.production) {
    if (!environment_1.environment.test) {
        exports.metaReducers.unshift(debug_reducer_1.debug);
    }
}
exports.selectAuthState = store_1.createFeatureSelector('auth');
exports.selectSettingsState = store_1.createFeatureSelector('settings');
exports.selectRouterState = store_1.createFeatureSelector('router');
//# sourceMappingURL=core.state.js.map