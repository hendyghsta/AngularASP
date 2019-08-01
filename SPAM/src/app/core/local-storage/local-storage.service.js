"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var APP_PREFIX = 'ANMS-';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.loadInitialState = function () {
        return Object.keys(localStorage).reduce(function (state, storageKey) {
            if (storageKey.includes(APP_PREFIX)) {
                var stateKeys_1 = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.')
                    .map(function (key) {
                    return key
                        .split('-')
                        .map(function (token, index) {
                        return index === 0
                            ? token
                            : token.charAt(0).toUpperCase() + token.slice(1);
                    })
                        .join('');
                });
                var currentStateRef_1 = state;
                stateKeys_1.forEach(function (key, index) {
                    if (index === stateKeys_1.length - 1) {
                        currentStateRef_1[key] = JSON.parse(localStorage.getItem(storageKey));
                        return;
                    }
                    currentStateRef_1[key] = currentStateRef_1[key] || {};
                    currentStateRef_1 = currentStateRef_1[key];
                });
            }
            return state;
        }, {});
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem("" + APP_PREFIX + key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem("" + APP_PREFIX + key));
    };
    LocalStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem("" + APP_PREFIX + key);
    };
    /** Tests that localStorage exists, can be written to, and read from. */
    LocalStorageService.prototype.testLocalStorage = function () {
        var testValue = 'testValue';
        var testKey = 'testKey';
        var retrievedValue;
        var errorMessage = 'localStorage did not return expected value';
        this.setItem(testKey, testValue);
        retrievedValue = this.getItem(testKey);
        this.removeItem(testKey);
        if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
        }
    };
    LocalStorageService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=local-storage.service.js.map