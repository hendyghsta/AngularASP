"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var core_state_1 = require("../core.state");
exports.selectAuth = store_1.createSelector(core_state_1.selectAuthState, function (state) { return state; });
exports.selectIsAuthenticated = store_1.createSelector(core_state_1.selectAuthState, function (state) { return state.isAuthenticated; });
//# sourceMappingURL=auth.selectors.js.map