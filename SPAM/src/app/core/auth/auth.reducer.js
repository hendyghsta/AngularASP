"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var auth_actions_1 = require("./auth.actions");
var store_1 = require("@ngrx/store");
exports.initialState = {
    isAuthenticated: false
};
var reducer = store_1.createReducer(exports.initialState, store_1.on(auth_actions_1.authLogin, function (state) { return (tslib_1.__assign({}, state, { isAuthenticated: true })); }), store_1.on(auth_actions_1.authLogout, function (state) { return (tslib_1.__assign({}, state, { isAuthenticated: false })); }));
function authReducer(state, action) {
    return reducer(state, action);
}
exports.authReducer = authReducer;
//# sourceMappingURL=auth.reducer.js.map