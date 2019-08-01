"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var store_1 = require("@ngrx/store");
var local_storage_service_1 = require("../local-storage/local-storage.service");
function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        if ([store_1.INIT.toString(), store_1.UPDATE.toString()].includes(action.type)) {
            return tslib_1.__assign({}, newState, local_storage_service_1.LocalStorageService.loadInitialState());
        }
        return newState;
    };
}
exports.initStateFromLocalStorage = initStateFromLocalStorage;
//# sourceMappingURL=init-state-from-local-storage.reducer.js.map