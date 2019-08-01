"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debug(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        console.log("[DEBUG] action: " + action.type, {
            payload: action.payload,
            oldState: state,
            newState: newState
        });
        return newState;
    };
}
exports.debug = debug;
//# sourceMappingURL=debug.reducer.js.map